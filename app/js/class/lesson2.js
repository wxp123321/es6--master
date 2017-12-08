{
    console.log(0b11111011);
}

{
    //isFinite是不是有尽
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true/0'));

    console.log('NaN',Number.isNaN(NaN));
    console.log('0',Number.isNaN(0));
}

{
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
    console.log('25.1',Number.isInteger('25.1'));
    console.log('25',Number.isInteger('25'));
}

{
    //最大值(js数值最大上限)
    console.log(Number.MAX_SAFE_INTEGER);
    //最小值(js数值最小上限)
    console.log(Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));
    console.log('a',Number.isSafeInteger('a'));
}

{
    //取整
    console.log('4.1',Math.trunc(4.1));
    console.log('4.9',Math.trunc(4.9));
}

{
    //判断正数负数0字符串也可以
    console.log('-5',Math.sign(-5));
    console.log('0',Math.sign(0));
    console.log('2',Math.sign(2));
    console.log('50',Math.sign('50'));
    console.log('foo',Math.sign('foo'));
}

{
    //立方根
    console.log('-1',Math.cbrt(-1));
    console.log('8',Math.cbrt(8));
}




