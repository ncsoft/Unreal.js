/* Implementation of HTML Timers (setInterval/setTimeout) based on sleep.
 *
 * This file is provided under the following terms (MIT License):
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Copyright 2012 Kevin Locke <kevin@kevinlocke.name>
 */
/*jslint bitwise: true, evil: true */

/**
 * Adds methods to implement the HTML5 WindowTimers interface on a given
 * object.
 *
 * Adds the following methods:
 * <ul>
 * <li>clearInterval</li>
 * <li>clearTimeout</li>
 * <li>setInterval</li>
 * <li>setTimeout</li>
 * </ul>
 *
 * See http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html
 * for the complete specification of these methods.
 *
 * Example Usage
 * Browser compatibility in Rhino:
 * <pre><code>// Note:  "this" refers to the global object in this example
 * var timerLoop = makeWindowTimer(this, java.lang.Thread.sleep);
 *
 * // Run code which may add intervals/timeouts
 *
 * timerLoop();
 * </code></pre>
 *
 * Browser compatibility in SpiderMonkey (smjs):
 * <pre><code>// Note:  "this" refers to the global object in this example
 * var timerLoop = makeWindowTimer(this, function (ms) { sleep(ms / 1000); });
 *
 * // Run code which may add intervals/timeouts
 *
 * timerLoop();
 * </code></pre>
 *
 * For more esoteric uses, timerLoop will return instead of sleeping if passed
 * <code>true</code> which will run only events which are pending at the moment
 * timerLoop is called:
 * <pre><code>// Note:  "this" refers to the global object in this example
 * var timerLoop = makeWindowTimer(this, java.lang.Thread.sleep);
 *
 * // Run code which may add intervals/timeouts
 *
 * while (timerLoop(true)) {
 *     print("Still waiting...");
 *     // Do other work here, possibly adding more intervals/timeouts
 * }
 * </code></pre>
 *
 * @param {Object} target Object to which the methods should be added.
 * @param {Function} sleep A function which sleeps for a specified number of
 *     milliseconds.
 * @return {Function} The function which runs the scheduled timers.
 */
function makeWindowTimer(target, sleep) {
    "use strict";

    var counter = 1,
        inCallback = false,
        // Map handle -> timer
        timersByHandle = {},
        // Min-heap of timers by time then handle, index 0 unused
        timersByTime = [ null ];

    /** Compares timers based on scheduled time and handle. */
    function timerCompare(t1, t2) {
        // Note:  Only need less-than for our uses
        return t1.time < t2.time ? -1 :
                (t1.time === t2.time && t1.handle < t2.handle ? -1 : 0);
    }

    /** Fix the heap invariant which may be violated at a given index */
    function heapFixDown(heap, i, lesscmp) {
        var j, tmp;

        j = i * 2;
        while (j < heap.length) {
            if (j + 1 < heap.length &&
                    lesscmp(heap[j + 1], heap[j]) < 0) {
                j = j + 1;
            }

            if (lesscmp(heap[i], heap[j]) < 0) {
                break;
            }

            tmp = heap[j];
            heap[j] = heap[i];
            heap[i] = tmp;
            i = j;
            j = i * 2;
        }
    }

    /** Fix the heap invariant which may be violated at a given index */
    function heapFixUp(heap, i, lesscmp) {
        var j, tmp;
        while (i > 1) {
            j = i >> 1;     // Integer div by 2

            if (lesscmp(heap[j], heap[i]) < 0) {
                break;
            }

            tmp = heap[j];
            heap[j] = heap[i];
            heap[i] = tmp;
            i = j;
        }
    }

    /** Remove the minimum element from the heap */
    function heapPop(heap, lesscmp) {
        heap[1] = heap[heap.length - 1];
        heap.pop();
        heapFixDown(heap, 1, lesscmp);
    }

    /** Create a timer and schedule code to run at a given time */
    function addTimer(code, delay, repeat, argsIfFn) {
        var handle, timer;

        if (typeof code !== "function") {
            code = String(code);
            argsIfFn = null;
        }
        delay = Number(delay) || 0;
        if (inCallback) {
            delay = Math.max(delay, 4);
        }
        // Note:  Must set handle after argument conversion to properly
        // handle conformance test in HTML5 spec.
        handle = counter;
        counter += 1;

        timer = {
            args: argsIfFn,
            cancel: false,
            code: code,
            handle: handle,
            repeat: repeat ? Math.max(delay, 4) : 0,
            time: $time * 1000 + delay
        };

        timersByHandle[handle] = timer;
        timersByTime.push(timer);
        heapFixUp(timersByTime, timersByTime.length - 1, timerCompare);

        return handle;
    }

    /** Cancel an existing timer */
    function cancelTimer(handle, repeat) {
        var timer;

        if (timersByHandle.hasOwnProperty(handle)) {
            timer = timersByHandle[handle];
            if (repeat === (timer.repeat > 0)) {
                timer.cancel = true;
            }
        }
    }

    function clearInterval(handle) {
        cancelTimer(handle, true);
    }
    target.clearInterval = clearInterval;

    function clearTimeout(handle) {
        cancelTimer(handle, false);
    }
    target.clearTimeout = clearTimeout;

    function setInterval(code, delay) {
        return addTimer(
            code,
            delay,
            true,
            Array.prototype.slice.call(arguments, 2)
        );
    }
    target.setInterval = setInterval;

    function setTimeout(code, delay) {
        return addTimer(
            code,
            delay,
            false,
            Array.prototype.slice.call(arguments, 2)
        );
    }
    target.setTimeout = setTimeout;

    return function timerLoop(nonblocking) {
        var now, timer;

        // Note: index 0 unused in timersByTime
        while (timersByTime.length > 1) {
            timer = timersByTime[1];

            if (timer.cancel) {
                delete timersByHandle[timer.handle];
                heapPop(timersByTime, timerCompare);
            } else {
                now = $time * 1000;
                if (timer.time <= now) {
                    inCallback = true;
                    try {
                        if (typeof timer.code === "function") {
                            timer.code.apply(undefined, timer.args);
                        } else {
                            eval(timer.code);
                        }
                    } finally {
                        inCallback = false;
                    }

                    if (timer.repeat > 0 && !timer.cancel) {
                        timer.time += timer.repeat;
                        heapFixDown(timersByTime, 1, timerCompare);
                    } else {
                        delete timersByHandle[timer.handle];
                        heapPop(timersByTime, timerCompare);
                    }
                } else if (!nonblocking) {
                    sleep(timer.time - now);
                } else {
                    return true;
                }
            }
        }

        return false;
    };
}

module.exports = makeWindowTimer;
// vi: set sts=4 sw=4 et :
