/**
 * Created by XP on 2017/12/12.
 */
{
    //genertaor基本定义
    let tell = function* () {
        yield 'a'
        yield 'b'
        return 'c'
    };

    let k = tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    }

    for(let value of obj){
        console.log('value',value);
    }
}