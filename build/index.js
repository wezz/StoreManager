/*!
 * 
 *   @wezz/store-manager v0.0.12
 *   https://github.com/wezz/StoreManager
 *
 *   Copyright (c) Wezz Balk (https://github.com/wezz)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StoreManager"] = factory();
	else
		root["StoreManager"] = factory();
})(typeof global !== 'undefined' ? global : this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 346:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/* # Storage Manager

This will gelp you fetch information from session and local storage.

## Usage
import StoreManager from '../modules/StoreManager';
const storage = new StoreManager("storename");
let valueobj = storage.Get("valuekey"); // Will return a JSOn object if possible

valueobj.prop = "updatedprop";
storage.Save("valuekey", valueobj, true);

The last boolean defines if the values should be stored past the current session

*/

__webpack_unused_export__ = ({ value: true });
var StoreManager = /** @class */ (function () {
    function StoreManager(_prefix) {
        if (_prefix === void 0) { _prefix = "cache"; }
        this.storageTypes = {
            permanent: "localStorage",
            temporary: "sessionStorage",
        };
        this.prefix = _prefix;
    }
    StoreManager.prototype.getStorageMedium = function (permanent) {
        if (permanent === void 0) { permanent = true; }
        var storageType = permanent
            ? this.storageTypes.permanent
            : this.storageTypes.temporary;
        if (typeof window[storageType] !== "undefined") {
            return window[storageType];
        }
        return null;
    };
    StoreManager.prototype.Has = function (key) {
        return typeof this.Get("".concat(this.prefix, "-").concat(key)) !== "undefined";
    };
    StoreManager.prototype.Get = function (key) {
        var tempStorage = this.getStorageMedium(false);
        var permStorage = this.getStorageMedium(true);
        var success = false;
        var data = null;
        if (tempStorage && permStorage) {
            try {
                data = tempStorage.getItem("".concat(this.prefix, "-").concat(key));
                data = this.toJSONIfJSON(data);
                success = data !== null;
            }
            catch (e) { }
            if (!success) {
                try {
                    data = permStorage.getItem("".concat(this.prefix, "-").concat(key));
                    data = this.toJSONIfJSON(data);
                    success = data !== null;
                }
                catch (e) { }
            }
        }
        return data;
    };
    StoreManager.prototype.toJSONIfJSON = function (data) {
        if (typeof data === "string" &&
            (data.indexOf("{") === 0 || data.indexOf("[") === 0)) {
            data = JSON.parse(data);
        }
        return data;
    };
    StoreManager.prototype.Save = function (key, data, permanent) {
        if (permanent === void 0) { permanent = true; }
        console.warn("StoreManager.Save is deprecated");
        this.Set(key, data, permanent);
    };
    StoreManager.prototype.Set = function (key, data, permanent) {
        if (permanent === void 0) { permanent = true; }
        var storage = this.getStorageMedium(permanent);
        var success = false;
        if (storage) {
            if (typeof data === "object") {
                data = JSON.stringify(data);
            }
            try {
                storage.setItem("".concat(this.prefix, "-").concat(key), data);
                success = true;
            }
            catch (e) {
                console.error("Unable to save object", e);
            }
        }
        return success;
    };
    StoreManager.prototype.Remove = function (key) {
        var permanentStore = this.getStorageMedium(true);
        var sessionStorage = this.getStorageMedium(false);
        if (permanentStore) {
            permanentStore.removeItem("".concat(this.prefix, "-").concat(key));
        }
        if (sessionStorage) {
            sessionStorage.removeItem("".concat(this.prefix, "-").concat(key));
        }
    };
    return StoreManager;
}());
exports.Z = StoreManager;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StoreManager_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_StoreManager_ts__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map