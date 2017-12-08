{
    let arr2 = [2,3,4];
    let arr = Array.of(3,4,7,9,11);
    console.log("arr",arr);
    console.log("arr2",arr2);

    let empty = Array.of();
    console.log("empty",empty);
}

{
    let p = document.querySelectorAll('p');
    let parr = Array.from(p);
    parr.forEach(function (item) {
        console.log(item.textContent);
    });

    console.log(Array.from([1,3,5], function (item) {
        return item*2
    }))
}

{
    console.log("fill-7",[1,"a",undefined].fill(7));
    console.log("fill-pos",["a","b","c"].fill(7,1,3));
}

{
    for(let index of ["1","c","ks"].keys()){
        console.log('keys',index);
    }
    //values有兼容性问题
    //for(let value of ["1","c","ks"].values()){
    //    console.log('values',value);
    //}

    for(let [index,value] of ["1","c","ks"].entries()){
        console.log('values',index,value);
    }

}

{
    console.log([1,2,3,4,5,6].copyWithin(0,3,6));
}

{
    console.log([1,2,3,4,5,6].find(function (item) {
        return item>3;
    }));
    console.log([1,2,3,4,5,6].findIndex(function (item) {
        return item>3;
    }));
}

{
    console.log('number',[1,2,NaN].includes(1));
    console.log('number',[1,2,NaN].includes(NaN));
}





