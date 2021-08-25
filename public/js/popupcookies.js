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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/libs/popup.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/libs/popup.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ($) {
  return {
    openpopup: function openpopup(id) {
      $('.popup' + id).fadeIn(300);
      $('body').addClass('lock');
    },
    closepopup: function closepopup(id) {
      $('.popup' + id).fadeOut(300);
      $('body').removeClass('lock');
    },
    btnpopup: function btnpopup() {
      var _th = this;

      $('.close-popup .overlay').on('click', function (e) {
        e.preventDefault();
        var idpopup = '#' + $(this).parents('.popup').attr('id');

        _th.closepopup(idpopup);
      });
    },
    popupdetail: function popupdetail() {
      var _th = this;

      $('.order-detail .download-popup').on('click', function (e) {
        e.preventDefault();
        var idpopup = '#order-detail';

        _th.openpopup(idpopup);
      });
    },
    popupreview: function popupreview() {
      var _th = this;

      $('.img-reviewer figure >img').on('click', function () {
        console.log('a');
        var datapop = $(this).parent().find('.data-pop'),
            text = datapop.html(),
            vpopup = $('#popup-review .wrap-img');
        vpopup.html(text);

        _th.openpopup('#popup-review');
      });
      $('#popup-review .close-popup, .overlay').on('click', function (e) {
        e.preventDefault();

        _th.closepopup('#popup-review');
      });
    },
    popupproductreview: function popupproductreview() {
      var _th = this;

      $('.img-review figure >img').on('click', function () {
        console.log('a');
        var datapop = $(this).parent().find('.data-pop'),
            text = datapop.html(),
            vpopup = $('#popup-product-review .wrap-img');
        vpopup.html(text);

        _th.openpopup('#popup-product-review');
      });
      $('#popup-product-review .close-popup, .overlay').on('click', function (e) {
        e.preventDefault();

        _th.closepopup('#popup-product-review');
      });
    },
    init: function init() {
      this.btnpopup();
      this.popupdetail();
      this.popupreview();
      this.popupproductreview();
    }
  };
});

/***/ }),

/***/ "./resources/assets/js/popupcookies.js":
/*!*********************************************!*\
  !*** ./resources/assets/js/popupcookies.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/popup.js */ "./resources/assets/js/libs/popup.js");

var popupCookies = {};

popupCookies.setcookie = function (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

popupCookies.getcookie = function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
};

popupCookies.checkcookie = function () {
  var user = popupCookies.getcookie("celinicookies");

  if (user != "") {} else {
    Object(_libs_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])($).openpopup('#popup-cookies');
    popupCookies.setcookie("celinicookies", "cellini", 7);
  }
};

popupCookies.cookieshome = function () {
  $('#popup-cookies .close-popup').on('click', function (e) {
    e.preventDefault();
    var idpopup = '#popup-cookies';
    Object(_libs_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])($).closepopup(idpopup);
  });
};

popupCookies.init = function () {
  popupCookies.checkcookie();
  popupCookies.cookieshome();
};

popupCookies.init();

/***/ }),

/***/ 6:
/*!***************************************************!*\
  !*** multi ./resources/assets/js/popupcookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\laragon\www\cellini\resources\assets\js\popupcookies.js */"./resources/assets/js/popupcookies.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9saWJzL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcG9wdXBjb29raWVzLmpzIl0sIm5hbWVzIjpbIiQiLCJvcGVucG9wdXAiLCJpZCIsImZhZGVJbiIsImFkZENsYXNzIiwiY2xvc2Vwb3B1cCIsImZhZGVPdXQiLCJyZW1vdmVDbGFzcyIsImJ0bnBvcHVwIiwiX3RoIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpZHBvcHVwIiwicGFyZW50cyIsImF0dHIiLCJwb3B1cGRldGFpbCIsInBvcHVwcmV2aWV3IiwiY29uc29sZSIsImxvZyIsImRhdGFwb3AiLCJwYXJlbnQiLCJmaW5kIiwidGV4dCIsImh0bWwiLCJ2cG9wdXAiLCJwb3B1cHByb2R1Y3RyZXZpZXciLCJpbml0IiwicG9wdXBDb29raWVzIiwic2V0Y29va2llIiwiY25hbWUiLCJjdmFsdWUiLCJleGRheXMiLCJkIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvVVRDU3RyaW5nIiwiZG9jdW1lbnQiLCJjb29raWUiLCJnZXRjb29raWUiLCJuYW1lIiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNoZWNrY29va2llIiwidXNlciIsInBvcHVwIiwiY29va2llc2hvbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3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LENBVEQ7O0FBV0FELFlBQVksQ0FBQzBCLFdBQWIsR0FBMkIsWUFBTTtBQUUvQnRELEdBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDVSxFQUFqQyxDQUFvQyxPQUFwQyxFQUE0QyxVQUFTQyxDQUFULEVBQVc7QUFDakRBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxnQkFBaEI7QUFDQXdDLGtFQUFLLENBQUNyRCxDQUFELENBQUwsQ0FBU0ssVUFBVCxDQUFvQlEsT0FBcEI7QUFDTCxHQUpEO0FBS0QsQ0FQRDs7QUFTQWUsWUFBWSxDQUFDRCxJQUFiLEdBQW9CLFlBQU07QUFDdEJDLGNBQVksQ0FBQ3VCLFdBQWI7QUFDQXZCLGNBQVksQ0FBQzBCLFdBQWI7QUFDSCxDQUhEOztBQUtBMUIsWUFBWSxDQUFDRCxJQUFiLEciLCJmaWxlIjoiL2pzL3BvcHVwY29va2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJleHBvcnQgZGVmYXVsdCAoJCkgPT4gKHtcclxuXHRvcGVucG9wdXAoaWQpe1xyXG4gICAgICAgICQoJy5wb3B1cCcraWQpLmZhZGVJbigzMDApO1xyXG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbG9jaycpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlcG9wdXAoaWQpe1xyXG4gICAgICAgICQoJy5wb3B1cCcraWQpLmZhZGVPdXQoMzAwKTtcclxuICAgICAgXHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xvY2snKTsgIFxyXG4gICAgfSxcclxuICAgIGJ0bnBvcHVwKCl7XHJcbiAgICAgICAgY29uc3QgX3RoID0gdGhpc1xyXG4gICAgICAgICQoJy5jbG9zZS1wb3B1cCAub3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpZHBvcHVwID0gJyMnKyQodGhpcykucGFyZW50cygnLnBvcHVwJykuYXR0cignaWQnKVxyXG4gICAgICAgICAgICBfdGguY2xvc2Vwb3B1cChpZHBvcHVwKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgcG9wdXBkZXRhaWwoKXtcclxuICAgIFx0Y29uc3QgX3RoID0gdGhpc1xyXG4gICAgXHQkKCcub3JkZXItZGV0YWlsIC5kb3dubG9hZC1wb3B1cCcpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICBcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHRcdGNvbnN0IGlkcG9wdXAgPSAnI29yZGVyLWRldGFpbCdcclxuICAgICAgICAgICAgX3RoLm9wZW5wb3B1cChpZHBvcHVwKVxyXG4gICAgXHR9KVxyXG4gICAgfSxcclxuICAgIHBvcHVwcmV2aWV3KCl7XHJcbiAgICAgICAgY29uc3QgX3RoID0gdGhpc1xyXG4gICAgICAgICQoJy5pbWctcmV2aWV3ZXIgZmlndXJlID5pbWcnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhJylcclxuICAgICAgICAgICAgbGV0IGRhdGFwb3AgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5kYXRhLXBvcCcpLFxyXG4gICAgICAgICAgICAgICAgdGV4dCAgICA9IGRhdGFwb3AuaHRtbCgpLFxyXG4gICAgICAgICAgICAgICAgdnBvcHVwICAgPSAkKCcjcG9wdXAtcmV2aWV3IC53cmFwLWltZycpXHJcblxyXG4gICAgICAgICAgICB2cG9wdXAuaHRtbCh0ZXh0KVxyXG4gICAgICAgICAgICBfdGgub3BlbnBvcHVwKCcjcG9wdXAtcmV2aWV3JylcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoJyNwb3B1cC1yZXZpZXcgLmNsb3NlLXBvcHVwLCAub3ZlcmxheScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgX3RoLmNsb3NlcG9wdXAoJyNwb3B1cC1yZXZpZXcnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgcG9wdXBwcm9kdWN0cmV2aWV3KCl7XHJcbiAgICAgICAgY29uc3QgX3RoID0gdGhpc1xyXG4gICAgICAgICQoJy5pbWctcmV2aWV3IGZpZ3VyZSA+aW1nJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYScpXHJcbiAgICAgICAgICAgIGxldCBkYXRhcG9wID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuZGF0YS1wb3AnKSxcclxuICAgICAgICAgICAgICAgIHRleHQgICAgPSBkYXRhcG9wLmh0bWwoKSxcclxuICAgICAgICAgICAgICAgIHZwb3B1cCAgID0gJCgnI3BvcHVwLXByb2R1Y3QtcmV2aWV3IC53cmFwLWltZycpXHJcblxyXG4gICAgICAgICAgICB2cG9wdXAuaHRtbCh0ZXh0KVxyXG4gICAgICAgICAgICBfdGgub3BlbnBvcHVwKCcjcG9wdXAtcHJvZHVjdC1yZXZpZXcnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJCgnI3BvcHVwLXByb2R1Y3QtcmV2aWV3IC5jbG9zZS1wb3B1cCwgLm92ZXJsYXknKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIF90aC5jbG9zZXBvcHVwKCcjcG9wdXAtcHJvZHVjdC1yZXZpZXcnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmJ0bnBvcHVwKClcclxuICAgICAgICB0aGlzLnBvcHVwZGV0YWlsKClcclxuICAgICAgICB0aGlzLnBvcHVwcmV2aWV3KClcclxuICAgICAgICB0aGlzLnBvcHVwcHJvZHVjdHJldmlldygpXHJcbiAgICB9XHJcbn0pXHJcbiIsIiAgaW1wb3J0IHBvcHVwICBmcm9tICcuL2xpYnMvcG9wdXAuanMnXHJcbiAgXHJcbiAgY29uc3QgcG9wdXBDb29raWVzID0ge307XHJcblxyXG4gIHBvcHVwQ29va2llcy5zZXRjb29raWUgPSAoY25hbWUsIGN2YWx1ZSwgZXhkYXlzKSA9PiB7XHJcbiAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrZC50b1VUQ1N0cmluZygpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj1cIiArIGN2YWx1ZSArIFwiO1wiICsgZXhwaXJlcyArIFwiO3BhdGg9L1wiO1xyXG4gIH1cclxuXHJcbiAgcG9wdXBDb29raWVzLmdldGNvb2tpZSA9IChjbmFtZSkgPT4ge1xyXG4gICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGMgPSBjYVtpXTtcclxuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcclxuICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxuICBwb3B1cENvb2tpZXMuY2hlY2tjb29raWUgPSAoKSA9PiB7XHJcbiAgICB2YXIgdXNlciA9IHBvcHVwQ29va2llcy5nZXRjb29raWUoXCJjZWxpbmljb29raWVzXCIpO1xyXG5cclxuICAgIGlmICh1c2VyICE9IFwiXCIpIHtcclxuICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3B1cCgkKS5vcGVucG9wdXAoJyNwb3B1cC1jb29raWVzJykgIFxyXG4gICAgICBwb3B1cENvb2tpZXMuc2V0Y29va2llKFwiY2VsaW5pY29va2llc1wiLCBcImNlbGxpbmlcIiwgNyk7XHJcbiAgICB9ICAgXHJcbiAgfVxyXG5cclxuICBwb3B1cENvb2tpZXMuY29va2llc2hvbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgJCgnI3BvcHVwLWNvb2tpZXMgLmNsb3NlLXBvcHVwJykub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgY29uc3QgaWRwb3B1cCA9ICcjcG9wdXAtY29va2llcydcclxuICAgICAgICAgIHBvcHVwKCQpLmNsb3NlcG9wdXAoaWRwb3B1cCkgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwb3B1cENvb2tpZXMuaW5pdCA9ICgpID0+IHtcclxuICAgICAgcG9wdXBDb29raWVzLmNoZWNrY29va2llKClcclxuICAgICAgcG9wdXBDb29raWVzLmNvb2tpZXNob21lKClcclxuICB9XHJcblxyXG4gIHBvcHVwQ29va2llcy5pbml0KClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
