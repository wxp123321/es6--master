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

