{
    let list = new Set();
    list.add(5);
    list.add(7);

    //长度
    console.log('size',list.size);
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size',list.size);
}

{
    //添加重复元素不会报错 可以去重
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log(list);

    let arr = [1,2,3,1,'2'];
    let list2 = new Set(arr);

    console.log(list2);
}

{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);

    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list);
}

{
    //Set遍历 key和value一样
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('key',list.keys());
    for(let key of list.keys()){
        console.log('keys',key);
    }
    for(let value of list.values()){
        console.log(value);
    }
    for(let value of list){
        console.log(value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }
    list.forEach(function (item) {
        console.log(item);
    })
}

{
    //WeakSet的元素必须是对象 得到的是引用  不考虑引用地址是否被垃圾回收机制回收
    //不能遍历  没有clear方法 size属性
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    console.log('weakList',weakList);
}

{
    let map = new Map();
    let arr = ['123'];

    //Set添加是add Map set
    //arr作为key 456作为值
    map.set(arr,456);

    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log('map',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    map.clear();
    console.log(map);
}

{
    //和WeakSet一样
    let weakmap = new WeakMap();

    let o = {};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}

{
    let map = new Map();
    let arr = [];

    //增
    map.set('t',1);
    arr.push({t:1});
    console.info('map-arr',map,arr);

    //查
    let map_exist = map.has('t');
    let arr_exist = arr.find(item=>item.t);
    console.log(map_exist,arr_exist);

    //改
    map.set('t',2);
    arr.forEach(item=>item.t?item.t=2:'');
    console.info('map-arr-modify',map,arr);

    //删
    map.delete('t');
    let index = arr.findIndex(item=>item.t);
    arr.splice(index,1);
    console.info('map-arr-empty',map,arr);
}

{
    //set和arr对比
    let set = new Set();
    let arr = [];

    //增
    let json = {t:1};
    set.add(json);
    arr.push({t:1});
    console.info('map-arr',set,arr);

    //查 set的has中填写的是引用 必须被保存之后再使用
    let set_exist = set.has(json);
    let arr_exist = arr.find(item=>item.t);
    console.log(set_exist);
    console.log(arr_exist)

    //改
    set.forEach(item=>item.t?item.t=2:'');
    arr.forEach(item=>item.t?item.t=2:'');
    console.info('set-arr-modify',set,arr);

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index = arr.findIndex(item=>item.t);
    arr.splice(index,1);
    console.info('set-arr-empty',set,arr);
}

{
    //map set object对比
    let item={t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.log('map-set-obj',map,set,obj);

    //查
    console.log({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist: 't' in obj
    })

    //改
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.log('map-set-obj-modify',map,set,obj);

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-empty',obj,map,set);
}



