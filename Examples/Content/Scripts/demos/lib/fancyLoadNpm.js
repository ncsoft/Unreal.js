const delay = require('./delay');
const npm = require('./npm');

module.exports = (moduleName = '', global = {}) => {
    const validModuleName = moduleName.replace(/\//g, "_");

    const __scriptPath = Context.GetDir('GameContent') + 'Scripts';
    const __srcScriptPath = `${__scriptPath}/${validModuleName}.js`;
    const __desScriptPath = `${__scriptPath}/bundle_${validModuleName}.js`;

    function IsNeedPrepare() {
        return JavascriptLibrary.FileExists(__desScriptPath);
    }

    function Prepare() {
        return new Promise(resolve => {
            npm('browserify').then(() => npm(validModuleName)).then(() => {
                const script = `global['cached_${validModuleName}'] = require('${moduleName}');`;
                JavascriptLibrary.WriteStringToFile(Context, __srcScriptPath, script);
                resolve()
            });
        });
    }

    function Process() {
        const script = `(() => {
            var browserify = require('browserify');
            var b = browserify();
            b.add('${__srcScriptPath}');

            var fs = require('fs');
            var bundleFs = fs.createWriteStream('${__desScriptPath}');

            b.bundle().pipe(bundleFs);
        })()`;
        
        const __browsifyScriptPath = `${__scriptPath}/temp.js`;
        JavascriptLibrary.WriteStringToFile(Context, __browsifyScriptPath, script);
        
        let p = JavascriptProcess.Create(
            'node',
            `${__browsifyScriptPath}`,
            true, false, false, 0, '', true
        )
        console.log('browserify', __srcScriptPath, __desScriptPath)
        function pipe() {
            let s = p.ReadFromPipe()
            // @NOTE:
            // console.log(s)
        }
        return new Promise(resolve => {
            while (p.IsRunning()) {
                delay(50).then(pipe);
            }

            JavascriptLibrary.DeleteFile(__browsifyScriptPath);
            JavascriptLibrary.DeleteFile(__srcScriptPath);

            resolve();
        })
    }

    function PostInit() {
        require(__desScriptPath);

        newModule = global[`cached_${validModuleName}`];
        delete global[`cached_${validModuleName}`];
    }

    let newModule = {};

    if (IsNeedPrepare() == false) {
        Prepare().then(Process).then(PostInit);
    } else {
        PostInit();
    }

    return newModule;
};