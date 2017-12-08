{
    let str = "helloworld";
    console.log("包含",str.includes("ow"));
    console.log("开始",str.startsWith("he"));
    console.log("结束",str.endsWith("ld"));
}

{
    let str = "abc";
    console.log(str.repeat(2));
}

{
    let name = 'list';
    let info = 'helloworld';
    let m = `i am ${name},${info}`;
    console.log(m);
}

{
    let user = {
        name:"list",
        info:"hello world"
    }
    abc`i am ${user.name}${user.info}`;
    function abc(s,v1,v2){
        console.log("s",s);
        console.log("v1",v1);
        console.log("v2",v2);
        return s+v1+v2;
    }
}

{
    //可以输出‘\n’
    console.log(String.raw`Hi\n${1+2}`);
}