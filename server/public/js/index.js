/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	{
	    //简洁表示法
	    var o = 1;
	    var k = 2;
	    var es5 = {
	        o: o,
	        k: k
	    };
	    var es6 = {
	        o: o,
	        k: k
	    };
	    console.log(es5);
	    console.log(es6);

	    var es5_method = {
	        hello: function hello() {
	            console.log("hello");
	        }
	    };
	    var es6_method = {
	        hello: function hello() {
	            console.log("hello");
	        }
	    };
	    console.log(es5_method, es6_method);
	}

	{
	    //属性表达式
	    var a = "b";
	    var es5_obj = {
	        a: "c"
	    };
	    var es6_obj = _defineProperty({}, a, 'c');

	    console.log(es5_obj, es6_obj);
	}

	{
	    //is函数和 === 没区别
	    console.log("字符串", Object.is('abc', 'abc'), 'abc' === 'abc');
	    console.log('数组', Object.is([], []), [] === []);

	    console.log('拷贝', Object.assign({ a: 'a' }, { b: 'b' }));
	}

/***/ })
/******/ ]);