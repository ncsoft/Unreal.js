function ltrb(l,t,r,b) {
    if (t == undefined) { t = l }
    if (r == undefined) { r = l }
    if (b == undefined) { b = t }
    return { Left: l, Top: t, Right: r, Bottom: b }
}

const hex2rgb = require('hex-rgb')

function hex2lc(hex,a=1) {
    let [r,g,b] = hex2rgb(hex).map(x => Math.pow(x/255.0,2.2))
    return {R:r,G:g,B:b,A:a}
}

module.exports = {
    ltrb: ltrb,
    hex2lc: hex2lc
}