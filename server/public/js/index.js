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

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	{
	    var obj = {
	        time: '2017-12-10',
	        name: 'net',
	        _r: 123
	    };

	    var monitor = new Proxy(obj, {
	        //拦截对象属性的读取
	        get: function get(target, key) {
	            return target[key].replace('2017', '2018');
	        },

	        //拦截对象设置属性
	        set: function set(target, key, value) {
	            if (key === 'name') {
	                return target[key] = value;
	            } else {
	                return target[key];
	            }
	        },

	        //拦截key in object操作
	        has: function has(target, key) {
	            if (key === 'name') {
	                return target[key];
	            } else {
	                return false;
	            }
	        },

	        //拦截delete
	        deleteProperty: function deleteProperty(target, key) {
	            if (key.indexOf('_') > -1) {
	                delete target[key];
	                return true;
	            } else {
	                return target[key];
	            }
	        },

	        //拦截Object.keys,Object.getOwnPropertSymbols,Object.getOwnPropertyNames
	        ownKeys: function ownKeys(target) {
	            return Object.keys(target).filter(function (item) {
	                return item != 'time';
	            });
	        }
	    });

	    console.log('get', monitor.time);

	    monitor.time = '2018';
	    monitor.name = 'lalala';
	    console.log('set', monitor.time);
	    console.log('set', monitor);
	    console.log('name', 'name' in monitor);
	    console.log('time', 'time' in monitor);

	    //delete monitor.time;
	    //console.log('delete',monitor);
	    //delete monitor._r;
	    //console.log('delete',monitor);

	    console.log('ownKeys', Object.keys(monitor));
	}

	{
	    var _obj = {
	        time: '2017-12-10',
	        name: 'net',
	        _r: 123
	    };
	    console.log('Reflect get', Reflect.get(_obj, 'time'));
	    Reflect.set(_obj, 'name', 'lalala');
	    console.log(_obj);
	    console.log(Reflect.has(_obj, 'name'));
	}

	{
	    var validator = function validator(target, _validator) {
	        return new Proxy(target, {
	            _validator: _validator,
	            set: function set(target, key, value, proxy) {
	                if (target.hasOwnProperty(key)) {
	                    var va = this._validator[key];
	                    if (!!va(value)) {
	                        return Reflect.set(target, key, value, proxy);
	                    } else {
	                        throw Error('不能设置${key}到${value}');
	                    }
	                } else {
	                    throw Error('${key}不存在');
	                }
	            }
	        });
	    };

	    var personValidators = {
	        name: function name(val) {
	            return typeof val === 'string';
	        },
	        age: function age(val) {
	            return typeof val === 'number' && val > 18;
	        }
	    };

	    var Person = function Person(name, age) {
	        _classCallCheck(this, Person);

	        this.name = name;
	        this.age = age;
	        return validator(this, personValidators);
	    };

	    var person = new Person('xp', 30);
	    console.log(person);

	    //person.name = 48;
	    person.name = 'xxxx';
	    console.log(person);
	}

/***/ })
/******/ ]);