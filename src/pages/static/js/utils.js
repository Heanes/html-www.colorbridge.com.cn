/**
 * @doc 原生js加载script
 * @param url
 * @param callback
 * @usage
 *  loadScript("jquery-latest.js", function () { //加载,并执行回调函数
        console.log('loadSuccess);
    });
 * @author Heanes
 * @time 2018-11-22 18:09:52 周四
 */
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (typeof (callback) != "undefined") {
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function () {
                callback();
            };
        }
    }
    script.src = url;
    document.body.appendChild(script);
}

export {
    loadScript
}
