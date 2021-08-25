/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/banner.js":
/*!***************************************!*\
  !*** ./resources/assets/js/banner.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_responsiveImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/responsiveImage.js */ "./resources/assets/js/libs/responsiveImage.js");

var responsive = Object(_libs_responsiveImage_js__WEBPACK_IMPORTED_MODULE_0__["default"])($);
var bannerGeneral = {};

bannerGeneral.bannerhome = function () {
  var elemBanner = $(".banner-home figure img");
  responsive.responsiveImage(elemBanner, {
    type: 'image'
  });
};

bannerGeneral.bannerlanding = function () {
  var elemBanner = $(".banner-landing figure img");
  responsive.responsiveImage(elemBanner, {
    type: 'image'
  });
};

bannerGeneral.error = function () {
  var elemBanner = $(".banner-password img");
  responsive.responsiveImage(elemBanner, {
    type: 'image'
  });
};

bannerGeneral.init = function () {
  this.bannerhome();
  this.bannerlanding();
  this.error();
};

bannerGeneral.init();

/***/ }),

/***/ "./resources/assets/js/libs/responsiveImage.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/libs/responsiveImage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ($) {
  return {
    supportsWebp: function supportsWebp() {
      var elem = document.createElement('canvas');

      if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
      } // very old browser like IE 8, canvas not supported


      return false;
    },
    responsiveImage: function responsiveImage(elem, e) {
      var webp_support = this.supportsWebp(),
          ext = webp_support ? "-webp" : "",
          this_ = this;
      var etype = e.type;

      if (etype === undefined) {
        etype = "background";
      }

      var window_width = $(window).width();
      elem.each(function () {
        var flag = false;
        var images_url = '';

        if (window_width >= 1280 && $(this).attr('has_load') != 'large') {
          images_url = $(this).attr('data-img-large' + ext);

          if (images_url == undefined || images_url == "") {
            images_url = $(this).attr('data-img-large');
          }

          $(this).attr('has_load', 'large');
          flag = true;
        } else if (window_width < 1280 && window_width >= 940 && $(this).attr('has_load') != 'medium') {
          images_url = $(this).attr('data-img-medium' + ext);

          if (images_url == undefined || images_url == "") {
            images_url = $(this).attr('data-img-medium');
          }

          $(this).attr('has_load', 'medium');
          flag = true;
        } else if (window_width < 940 && window_width >= 0 && $(this).attr('has_load') != 'small') {
          images_url = $(this).attr('data-img-small' + ext);

          if (images_url == undefined || images_url == "") {
            images_url = $(this).attr('data-img-small');
          }

          $(this).attr('has_load', 'small');
          flag = true;
        }

        if (images_url == undefined) {
          images_url = $(this).attr('data-img-large');
          $(this).attr('has_load', 'large');
        }

        if (flag) {
          if (etype == "background") {
            $(this).css('background-image', 'url(' + images_url + ')');
          } else {
            $(this).attr('src', images_url);
          }
        }
      });
      var resizeTimer;
      $(window).resize(function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          this_.responsiveImage(elem, e);
        }, 500);
      });
    }
  };
});

/***/ }),

/***/ 2:
/*!*********************************************!*\
  !*** multi ./resources/assets/js/banner.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\laragon\www\cellini\resources\assets\js\banner.js */"./resources/assets/js/banner.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9saWJzL3Jlc3BvbnNpdmVJbWFnZS5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwicmVzcG9uc2l2ZUltYWdlIiwiJCIsImJhbm5lckdlbmVyYWwiLCJiYW5uZXJob21lIiwiZWxlbUJhbm5lciIsInR5cGUiLCJiYW5uZXJsYW5kaW5nIiwiZXJyb3IiLCJpbml0Iiwic3VwcG9ydHNXZWJwIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJ0b0RhdGFVUkwiLCJpbmRleE9mIiwiZSIsIndlYnBfc3VwcG9ydCIsImV4dCIsInRoaXNfIiwiZXR5cGUiLCJ1bmRlZmluZWQiLCJ3aW5kb3dfd2lkdGgiLCJ3aW5kb3ciLCJ3aWR0aCIsImVhY2giLCJmbGFnIiwiaW1hZ2VzX3VybCIsImF0dHIiLCJjc3MiLCJyZXNpemVUaW1lciIsInJlc2l6ZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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O0FBQ0QzQixXQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQixJQUFSLENBQWEsVUFBYixFQUF5QixPQUF6QjtBQUNBRixjQUFJLEdBQUcsSUFBUDtBQUNEOztBQUNELFlBQUlDLFVBQVUsSUFBSU4sU0FBbEIsRUFBNkI7QUFDM0JNLG9CQUFVLEdBQUcxQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQixJQUFSLENBQWEsZ0JBQWIsQ0FBYjtBQUNBM0IsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkIsSUFBUixDQUFhLFVBQWIsRUFBeUIsT0FBekI7QUFDRDs7QUFFRCxZQUFJRixJQUFKLEVBQVM7QUFDUCxjQUFHTixLQUFLLElBQUksWUFBWixFQUF5QjtBQUNyQm5CLGFBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxTQUFPRixVQUFQLEdBQWtCLEdBQWxEO0FBQ0gsV0FGRCxNQUVLO0FBQ0QxQixhQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQixJQUFSLENBQWEsS0FBYixFQUFvQkQsVUFBcEI7QUFDSDtBQUNGO0FBQ0YsT0FyQ0Q7QUF1Q0osVUFBSUcsV0FBSjtBQUVBN0IsT0FBQyxDQUFDc0IsTUFBRCxDQUFELENBQVVRLE1BQVYsQ0FBaUIsWUFBWTtBQUN6QkMsb0JBQVksQ0FBQ0YsV0FBRCxDQUFaO0FBQ0FBLG1CQUFXLEdBQUdHLFVBQVUsQ0FBQyxZQUFZO0FBQ2pDZCxlQUFLLENBQUNuQixlQUFOLENBQXNCVSxJQUF0QixFQUE0Qk0sQ0FBNUI7QUFDSCxTQUZ1QixFQUVyQixHQUZxQixDQUF4QjtBQUdILE9BTEQ7QUFNRDtBQW5Fb0IsR0FBUjtBQUFBLENBQWYsRSIsImZpbGUiOiIvanMvYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCByZXNwb25zaXZlSW1hZ2UgZnJvbSAnLi9saWJzL3Jlc3BvbnNpdmVJbWFnZS5qcyc7IFxyXG5jb25zdCByZXNwb25zaXZlID0gcmVzcG9uc2l2ZUltYWdlKCQpXHJcblxyXG5jb25zdCBiYW5uZXJHZW5lcmFsID0ge31cclxuXHJcbmJhbm5lckdlbmVyYWwuYmFubmVyaG9tZSA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgZWxlbUJhbm5lciA9ICQoXCIuYmFubmVyLWhvbWUgZmlndXJlIGltZ1wiKVxyXG5cdHJlc3BvbnNpdmUucmVzcG9uc2l2ZUltYWdlKGVsZW1CYW5uZXIsIHtcclxuXHRcdHR5cGU6ICdpbWFnZSdcclxuXHR9KVxyXG59XHJcblxyXG5iYW5uZXJHZW5lcmFsLmJhbm5lcmxhbmRpbmcgPSBmdW5jdGlvbigpe1xyXG5cdGNvbnN0IGVsZW1CYW5uZXIgPSAkKFwiLmJhbm5lci1sYW5kaW5nIGZpZ3VyZSBpbWdcIilcclxuXHRyZXNwb25zaXZlLnJlc3BvbnNpdmVJbWFnZShlbGVtQmFubmVyLCB7XHJcblx0XHR0eXBlOiAnaW1hZ2UnXHJcblx0fSlcclxufVxyXG5cclxuYmFubmVyR2VuZXJhbC5lcnJvciA9IGZ1bmN0aW9uKCl7XHJcblx0Y29uc3QgZWxlbUJhbm5lciA9ICQoXCIuYmFubmVyLXBhc3N3b3JkIGltZ1wiKVxyXG5cdHJlc3BvbnNpdmUucmVzcG9uc2l2ZUltYWdlKGVsZW1CYW5uZXIsIHtcclxuXHRcdHR5cGU6ICdpbWFnZSdcclxuXHR9KVxyXG59XHJcblxyXG5cclxuYmFubmVyR2VuZXJhbC5pbml0ID0gZnVuY3Rpb24oKXtcclxuXHR0aGlzLmJhbm5lcmhvbWUoKVxyXG5cdHRoaXMuYmFubmVybGFuZGluZygpXHJcblx0dGhpcy5lcnJvcigpXHJcbn1cclxuXHJcbmJhbm5lckdlbmVyYWwuaW5pdCgpIiwiZXhwb3J0IGRlZmF1bHQgKCQpID0+ICh7XHJcbiAgc3VwcG9ydHNXZWJwKCkge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgaWYgKCEhKGVsZW0uZ2V0Q29udGV4dCAmJiBlbGVtLmdldENvbnRleHQoJzJkJykpKSB7XHJcbiAgICAgICAgLy8gd2FzIGFibGUgb3Igbm90IHRvIGdldCBXZWJQIHJlcHJlc2VudGF0aW9uXHJcbiAgICAgICAgcmV0dXJuIGVsZW0udG9EYXRhVVJMKCdpbWFnZS93ZWJwJykuaW5kZXhPZignZGF0YTppbWFnZS93ZWJwJykgPT0gMDtcclxuICAgIH1cclxuICAgIC8vIHZlcnkgb2xkIGJyb3dzZXIgbGlrZSBJRSA4LCBjYW52YXMgbm90IHN1cHBvcnRlZFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0sXHJcbiAgcmVzcG9uc2l2ZUltYWdlKGVsZW0sIGUpIHtcclxuICAgIGNvbnN0IHdlYnBfc3VwcG9ydCA9IHRoaXMuc3VwcG9ydHNXZWJwKCksXHJcbiAgICAgICAgZXh0ID0gd2VicF9zdXBwb3J0ID8gXCItd2VicFwiIDogXCJcIixcclxuICAgICAgICB0aGlzXyA9IHRoaXNcclxuXHJcbiAgICBsZXQgZXR5cGUgPSBlLnR5cGVcclxuICAgICAgICBpZihldHlwZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgZXR5cGUgPSBcImJhY2tncm91bmRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgZWxlbS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGxldCBmbGFnID0gZmFsc2VcclxuICAgICAgICAgIGxldCBpbWFnZXNfdXJsID0gJydcclxuICAgICAgICAgIGlmICh3aW5kb3dfd2lkdGggPj0gMTI4MCAmJiAkKHRoaXMpLmF0dHIoJ2hhc19sb2FkJykgIT0gJ2xhcmdlJykge1xyXG4gICAgICAgICAgICBpbWFnZXNfdXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWltZy1sYXJnZScrZXh0KTtcclxuICAgICAgICAgICAgaWYgKGltYWdlc191cmwgPT0gdW5kZWZpbmVkIHx8IGltYWdlc191cmwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzX3VybCA9ICQodGhpcykuYXR0cignZGF0YS1pbWctbGFyZ2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2hhc19sb2FkJywgJ2xhcmdlJyk7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dfd2lkdGggPCAxMjgwICYmIHdpbmRvd193aWR0aCA+PSA5NDAgJiYgJCh0aGlzKS5hdHRyKCdoYXNfbG9hZCcpICE9ICdtZWRpdW0nKSB7XHJcbiAgICAgICAgICAgIGltYWdlc191cmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaW1nLW1lZGl1bScrZXh0KTtcclxuICAgICAgICAgICAgaWYgKGltYWdlc191cmwgPT0gdW5kZWZpbmVkIHx8IGltYWdlc191cmwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzX3VybCA9ICQodGhpcykuYXR0cignZGF0YS1pbWctbWVkaXVtJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdoYXNfbG9hZCcsICdtZWRpdW0nKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvd193aWR0aCA8IDk0MCAmJiB3aW5kb3dfd2lkdGggPj0gMCAmJiAkKHRoaXMpLmF0dHIoJ2hhc19sb2FkJykgIT0gJ3NtYWxsJykge1xyXG4gICAgICAgICAgICBpbWFnZXNfdXJsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWltZy1zbWFsbCcrZXh0KTtcclxuICAgICAgICAgICAgaWYgKGltYWdlc191cmwgPT0gdW5kZWZpbmVkIHx8IGltYWdlc191cmwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VzX3VybCA9ICQodGhpcykuYXR0cignZGF0YS1pbWctc21hbGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2hhc19sb2FkJywgJ3NtYWxsJyk7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGltYWdlc191cmwgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGltYWdlc191cmwgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaW1nLWxhcmdlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYXR0cignaGFzX2xvYWQnLCAnbGFyZ2UnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoZmxhZyl7XHJcbiAgICAgICAgICAgIGlmKGV0eXBlID09IFwiYmFja2dyb3VuZFwiKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnK2ltYWdlc191cmwrJyknKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsIGltYWdlc191cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgdmFyIHJlc2l6ZVRpbWVyO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XHJcbiAgICAgICAgcmVzaXplVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpc18ucmVzcG9uc2l2ZUltYWdlKGVsZW0sIGUpXHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==
