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

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	{
	    var list = new Set();
	    list.add(5);
	    list.add(7);

	    //长度
	    console.log('size', list.size);
	}

	{
	    var arr = [1, 2, 3, 4, 5];
	    var _list = new Set(arr);

	    console.log('size', _list.size);
	}

	{
	    //添加重复元素不会报错 可以去重
	    var _list2 = new Set();
	    _list2.add(1);
	    _list2.add(2);
	    _list2.add(1);
	    console.log(_list2);

	    var _arr = [1, 2, 3, 1, '2'];
	    var list2 = new Set(_arr);

	    console.log(list2);
	}

	{
	    var _arr2 = ['add', 'delete', 'clear', 'has'];
	    var _list3 = new Set(_arr2);

	    console.log('has', _list3.has('add'));
	    console.log('delete', _list3.delete('add'), _list3);
	    _list3.clear();
	    console.log('list', _list3);
	}

	{
	    //Set遍历 key和value一样
	    var _arr3 = ['add', 'delete', 'clear', 'has'];
	    var _list4 = new Set(_arr3);
	    console.log('key', _list4.keys());
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            console.log('keys', key);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = _list4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var value = _step2.value;

	            console.log(value);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = _list4[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var _value = _step3.value;

	            console.log(_value);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }

	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;

	    try {
	        for (var _iterator4 = _list4.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	            var _step4$value = _slicedToArray(_step4.value, 2),
	                _key = _step4$value[0],
	                _value2 = _step4$value[1];

	            console.log('entries', _key, _value2);
	        }
	    } catch (err) {
	        _didIteratorError4 = true;
	        _iteratorError4 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	            }
	        } finally {
	            if (_didIteratorError4) {
	                throw _iteratorError4;
	            }
	        }
	    }

	    _list4.forEach(function (item) {
	        console.log(item);
	    });
	}

	{
	    //WeakSet的元素必须是对象 得到的是引用  不考虑引用地址是否被垃圾回收机制回收
	    //不能遍历  没有clear方法 size属性
	    var weakList = new WeakSet();
	    var arg = {};
	    weakList.add(arg);
	    console.log('weakList', weakList);
	}

	{
	    var map = new Map();
	    var _arr4 = ['123'];

	    //Set添加是add Map set
	    //arr作为key 456作为值
	    map.set(_arr4, 456);

	    console.log('map', map, map.get(_arr4));
	}

	{
	    var _map = new Map([['a', 123], ['b', 456]]);
	    console.log('map', _map);
	    console.log('size', _map.size);
	    console.log('delete', _map.delete('a'), _map);
	    _map.clear();
	    console.log(_map);
	}

	{
	    //和WeakSet一样
	    var weakmap = new WeakMap();

	    var o = {};
	    weakmap.set(o, 123);
	    console.log(weakmap.get(o));
	}

	{
	    var _map2 = new Map();
	    var _arr5 = [];

	    //增
	    _map2.set('t', 1);
	    _arr5.push({ t: 1 });
	    console.info('map-arr', _map2, _arr5);

	    //查
	    var map_exist = _map2.has('t');
	    var arr_exist = _arr5.find(function (item) {
	        return item.t;
	    });
	    console.log(map_exist, arr_exist);

	    //改
	    _map2.set('t', 2);
	    _arr5.forEach(function (item) {
	        return item.t ? item.t = 2 : '';
	    });
	    console.info('map-arr-modify', _map2, _arr5);

	    //删
	    _map2.delete('t');
	    var index = _arr5.findIndex(function (item) {
	        return item.t;
	    });
	    _arr5.splice(index, 1);
	    console.info('map-arr-empty', _map2, _arr5);
	}

	{
	    //set和arr对比
	    var set = new Set();
	    var _arr6 = [];

	    //增
	    var json = { t: 1 };
	    set.add(json);
	    _arr6.push({ t: 1 });
	    console.info('map-arr', set, _arr6);

	    //查 set的has中填写的是引用 必须被保存之后再使用
	    var set_exist = set.has(json);
	    var _arr_exist = _arr6.find(function (item) {
	        return item.t;
	    });
	    console.log(set_exist);
	    console.log(_arr_exist);

	    //改
	    set.forEach(function (item) {
	        return item.t ? item.t = 2 : '';
	    });
	    _arr6.forEach(function (item) {
	        return item.t ? item.t = 2 : '';
	    });
	    console.info('set-arr-modify', set, _arr6);

	    //删
	    set.forEach(function (item) {
	        return item.t ? set.delete(item) : '';
	    });
	    var _index = _arr6.findIndex(function (item) {
	        return item.t;
	    });
	    _arr6.splice(_index, 1);
	    console.info('set-arr-empty', set, _arr6);
	}

	{
	    //map set object对比
	    var item = { t: 1 };
	    var _map3 = new Map();
	    var _set = new Set();
	    var obj = {};

	    //增
	    _map3.set('t', 1);
	    _set.add(item);
	    obj['t'] = 1;
	    console.log('map-set-obj', _map3, _set, obj);

	    //查
	    console.log({
	        map_exist: _map3.has('t'),
	        set_exist: _set.has(item),
	        obj_exist: 't' in obj
	    });

	    //改
	    _map3.set('t', 2);
	    item.t = 2;
	    obj['t'] = 2;
	    console.log('map-set-obj-modify', _map3, _set, obj);

	    //删除
	    _map3.delete('t');
	    _set.delete(item);
	    delete obj['t'];
	    console.info('map-set-obj-empty', obj, _map3, _set);
	}

/***/ })
/******/ ]);