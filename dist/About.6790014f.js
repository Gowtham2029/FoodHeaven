// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5GIuH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "deda77236790014f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"jb55R":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$368c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$368c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
var _foodItemsPng = require("./About_Images/food_items.png");
var _foodItemsPngDefault = parcelHelpers.interopDefault(_foodItemsPng);
var _carouselAbout = require("./CarouselAbout");
var _carouselAboutDefault = parcelHelpers.interopDefault(_carouselAbout);
const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 768
        },
        items: 4,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: {
            max: 767,
            min: 464
        },
        items: 4,
        slidesToSlide: 1
    }
};
const About = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: {
            margin: "2.5rem"
        },
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Outlet), {}, void 0, false, {
                fileName: "components/About.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                style: {
                    textAlign: "center",
                    marginBottom: "4rem",
                    textDecoration: "underline green 0.25rem",
                    textUnderlinePosition: "under"
                },
                children: "About Us"
            }, void 0, false, {
                fileName: "components/About.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                id: "about_page",
                style: {
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "description",
                        style: {
                            width: "30%",
                            textWrap: "balance",
                            marginTop: "2.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                children: [
                                    "Start Your BreakFast...",
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: " End with Your Dinner..!"
                                    }, void 0, false, {
                                        fileName: "components/About.jsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "components/About.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                style: {
                                    marginTop: "0.8rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                            style: {
                                                marginBottom: "0.2rem"
                                            },
                                            children: "We are your go-to destination for convenient and delicious dining."
                                        }, void 0, false, {
                                            fileName: "components/About.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "components/About.jsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, undefined),
                                    "Our user-friendly app connects you with a variety of local restaurants, allowing you to browse enticing menus and place orders with just a few taps. Whether you're craving comfort food, exploring new cuisines, or looking for healthy options, we've got you covered."
                                ]
                            }, void 0, true, {
                                fileName: "components/About.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "components/About.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "image",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            style: {
                                height: "22rem",
                                width: "18rem",
                                borderRadius: "1rem",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                            },
                            src: (0, _foodItemsPngDefault.default),
                            alt: "food_items"
                        }, void 0, false, {
                            fileName: "components/About.jsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "components/About.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "components/About.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: {
                    marginTop: "4rem"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                        style: {
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            style: {
                                textDecoration: "underline green 0.25rem",
                                textUnderlinePosition: "under"
                            },
                            children: "Our Place"
                        }, void 0, false, {
                            fileName: "components/About.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "components/About.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        style: {
                            textAlign: "center",
                            marginTop: "2rem",
                            textWrap: "balance",
                            lineHeight: "2rem"
                        },
                        children: "Savor the flavors of our place! Order now for a culinary journey that delights your taste buds. Exceptional dishes, swift delivery \u2013 your gastronomic satisfaction, our priority. Bon app\xe9tit!"
                    }, void 0, false, {
                        fileName: "components/About.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "components/About.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _carouselAboutDefault.default), {}, void 0, false, {
                fileName: "components/About.jsx",
                lineNumber: 102,
                columnNumber: 9
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "components/About.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, undefined);
};
_c = About;
exports.default = About;
var _c;
$RefreshReg$(_c, "About");

  $parcel$ReactRefreshHelpers$368c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-router-dom":"9xmpe","./About_Images/food_items.png":"6olcy","./CarouselAbout":"8toUh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"6olcy":[function(require,module,exports) {
module.exports = require("e4ce0ecd7e840c6e").getBundleURL("j8f5i") + "food_items.b2d22594.png" + "?" + Date.now();

},{"e4ce0ecd7e840c6e":"lgJ39"}],"8toUh":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$6a7d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$6a7d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _image1Jpg = require("./About_Images/Image1.jpg");
var _image1JpgDefault = parcelHelpers.interopDefault(_image1Jpg);
var _image2Jpg = require("./About_Images/Image2.jpg");
var _image2JpgDefault = parcelHelpers.interopDefault(_image2Jpg);
var _image3Jpg = require("./About_Images/Image3.jpg");
var _image3JpgDefault = parcelHelpers.interopDefault(_image3Jpg);
var _image4Jpg = require("./About_Images/Image4.jpg");
var _image4JpgDefault = parcelHelpers.interopDefault(_image4Jpg);
var _react = require("react");
var _s = $RefreshSig$();
const Carousel = [
    {
        id: 1,
        img: `${(0, _image1JpgDefault.default)}`,
        heading: "Vibrancy in Ambiance",
        desc: "The vibrancy doesn't end with the decor; it extends to the menu. At Chiefee, culinary creativity takes center stage, with a diverse array of dishes that burst with flavors and innovative combinations. Each plate is a canvas, painted with the vibrant palette of fresh ingredients and bold culinary techniques.Whether you're savoring a signature cocktail at the bar or relishing a flavorful dish at your table, [Restaurant Name] offers a dynamic experience that engages not just your taste buds but all your senses. It's a place where the joy of dining meets the vivacity of a lively atmosphere, making every visit a journey into a world of delicious dynamism."
    },
    {
        id: 2,
        img: `${(0, _image2JpgDefault.default)}`,
        heading: "Culinary Nirvana Achieved with Every Bite",
        desc: "Indulging in a burger at chefiee transcends the ordinary; it is an expedition into the extraordinary. As you sink your teeth into the meticulously crafted layers of goodness, a symphony of flavors unfolds, creating a culinary masterpiece that lingers on the palate and in the memory.The perfectly grilled patty, nestled between soft, toasted buns, is a testament to the chef's dedication to quality. Each bite is a harmonious blend of textures. The satisfying crunch of fresh vegetables, the juiciness of the savory meat, and the subtle interplay of condiments, all working together in gastronomic unity.with a diverse array of dishes that burst with flavors."
    },
    {
        id: 3,
        img: `${(0, _image3JpgDefault.default)}`,
        heading: "A Symphony on a Plate",
        desc: "A meticulously arranged plate in a restaurant is not just a gastronomic creation; it is a masterpiece of culinary artistry. Each dish is a canvas, painted with vibrant hues, textures, and flavors that come together in perfect harmony. The plate is a stage where ingredients take center spotlight, orchestrated by the chef's skillful hands. From the first glance to the last bite, the presentation captivates the senses. The vibrant colors evoke anticipation, while the arrangement of elements tells a story of balance and sophistication. each morsel is a portal to shared pleasure,of a decadent dessert.As you sink your teeth into the meticulously crafted layers of goodness"
    },
    {
        id: 4,
        img: `${(0, _image4JpgDefault.default)}`,
        heading: "A Culinary Delight",
        desc: "In the vibrant tapestry of social interactions, the act of savoring a meal transcends mere sustenance to become a celebration of culture, camaraderie, and exquisite flavors. Within the confines of a restaurant, people weave a symphony of joy as they indulge in culinary creations, transforming dining into a shared experience of delightThe clinking of cutlery, the murmur of conversations, and the symphony of laughter create an ambiance where food becomes a conduit for connection. Whether its the first bite of a tantalizing appetizer or the lingering taste of a decadent dessert, each morsel is a portal to shared pleasure."
    }
];
exports.default = CarouselAbout = _s(()=>{
    _s();
    const obj1 = {
        backgroundColor: "grey"
    };
    const obj2 = {
        backgroundColor: "grey"
    };
    const [index, setIndex] = (0, _react.useState)(3);
    const [objs1, setObjs1] = (0, _react.useState)(obj1.backgroundColor);
    const [objs2, setObjs2] = (0, _react.useState)(obj2.backgroundColor);
    function handlePrev(index) {
        const length = index - 1;
        return length < 0 ? setIndex(3) : setIndex(length);
    }
    function handleNext(index) {
        const length = index + 1;
        return length >= 4 ? setIndex(0) : setIndex(length);
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        style: {
            margin: "5rem"
        },
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: {
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginRight: "12rem"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        onClick: ()=>handleNext(index),
                        style: {
                            borderRadius: "50%",
                            padding: "0.7rem",
                            margin: "0.5rem",
                            color: "yellow",
                            backgroundColor: "green"
                        },
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: "\u2192"
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 58,
                            columnNumber: 152
                        }, undefined)
                    }, void 0, false, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 58,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        onClick: ()=>handlePrev(index),
                        style: {
                            borderRadius: "50%",
                            padding: "0.7rem",
                            margin: "0.5rem",
                            color: "yellow",
                            backgroundColor: "green"
                        },
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: "\u2190"
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 59,
                            columnNumber: 154
                        }, undefined)
                    }, void 0, false, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "components/CarouselAbout.jsx",
                lineNumber: 57,
                columnNumber: 6
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                fileName: "components/CarouselAbout.jsx",
                lineNumber: 61,
                columnNumber: 6
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-evenly"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        src: Carousel[index].img,
                        style: {
                            height: "20rem",
                            width: "22rem",
                            borderRadius: "1rem",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        },
                        alt: "images"
                    }, void 0, false, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 64,
                        columnNumber: 7
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        style: {
                            margin: "2rem",
                            width: "50%",
                            lineHeight: "1.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                children: [
                                    Carousel[index].heading,
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "components/CarouselAbout.jsx",
                                lineNumber: 65,
                                columnNumber: 69
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                fileName: "components/CarouselAbout.jsx",
                                lineNumber: 65,
                                columnNumber: 104
                            }, undefined),
                            Carousel[index].desc
                        ]
                    }, void 0, true, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 65,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "components/CarouselAbout.jsx",
                lineNumber: 63,
                columnNumber: 6
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "3rem"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "spanning",
                        style: {
                            height: "0.5rem",
                            width: "0.5rem"
                        },
                        children: [
                            index === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                style: {
                                    backgroundColor: "black",
                                    height: "0.3rem"
                                }
                            }, void 0, false, {
                                fileName: "components/CarouselAbout.jsx",
                                lineNumber: 72,
                                columnNumber: 98
                            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                style: {
                                    backgroundColor: "grey"
                                }
                            }, void 0, false, {
                                fileName: "components/CarouselAbout.jsx",
                                lineNumber: 72,
                                columnNumber: 163
                            }, undefined),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "spanning",
                        style: {
                            height: "0.5rem",
                            width: "0.5rem"
                        },
                        children: index === 1 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            style: {
                                backgroundColor: "black",
                                height: "0.3rem"
                            }
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 73,
                            columnNumber: 97
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            style: {
                                backgroundColor: "grey"
                            }
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 73,
                            columnNumber: 162
                        }, undefined)
                    }, void 0, false, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 73,
                        columnNumber: 8
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "spanning",
                        style: {
                            height: "0.5rem",
                            width: "0.5rem"
                        },
                        children: index === 2 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            style: {
                                backgroundColor: "black",
                                height: "0.3rem"
                            }
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 74,
                            columnNumber: 97
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            style: {
                                backgroundColor: "grey"
                            }
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 74,
                            columnNumber: 162
                        }, undefined)
                    }, void 0, false, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 74,
                        columnNumber: 8
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "spanning",
                        style: {
                            height: "0.5rem",
                            width: "0.5rem"
                        },
                        children: index === 3 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            style: {
                                backgroundColor: "black",
                                height: "0.3rem"
                            }
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 75,
                            columnNumber: 96
                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            style: {
                                backgroundColor: "grey"
                            }
                        }, void 0, false, {
                            fileName: "components/CarouselAbout.jsx",
                            lineNumber: 75,
                            columnNumber: 161
                        }, undefined)
                    }, void 0, false, {
                        fileName: "components/CarouselAbout.jsx",
                        lineNumber: 75,
                        columnNumber: 8
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "components/CarouselAbout.jsx",
                lineNumber: 68,
                columnNumber: 6
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "components/CarouselAbout.jsx",
        lineNumber: 56,
        columnNumber: 3
    }, undefined);
} // {(index === 1 )? (<h1 style={{backgroundColor:"black"}}>1</h1>) : (<h1 style={{backgroundColor:"grey"}}></h1>)}
, "N4CxyN2D5L9VnxfYUnZvLL83rQk=");

  $parcel$ReactRefreshHelpers$6a7d.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","./About_Images/Image1.jpg":"46lGK","./About_Images/Image2.jpg":"gsajX","./About_Images/Image3.jpg":"9zObS","./About_Images/Image4.jpg":"74GW0","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"46lGK":[function(require,module,exports) {
module.exports = require("cfa0b337ef92fc6a").getBundleURL("j8f5i") + "Image1.6cd03e7f.jpg" + "?" + Date.now();

},{"cfa0b337ef92fc6a":"lgJ39"}],"gsajX":[function(require,module,exports) {
module.exports = require("c354b2dedc3083fa").getBundleURL("j8f5i") + "Image2.8d040bb2.jpg" + "?" + Date.now();

},{"c354b2dedc3083fa":"lgJ39"}],"9zObS":[function(require,module,exports) {
module.exports = require("eb2fc37a73e94e").getBundleURL("j8f5i") + "Image3.2df1f91c.jpg" + "?" + Date.now();

},{"eb2fc37a73e94e":"lgJ39"}],"74GW0":[function(require,module,exports) {
module.exports = require("d13ddc7265c08cb9").getBundleURL("j8f5i") + "Image4.5000fe76.jpg" + "?" + Date.now();

},{"d13ddc7265c08cb9":"lgJ39"}]},["5GIuH","1xC6H"], null, "parcelRequirebd0f")

//# sourceMappingURL=About.6790014f.js.map
