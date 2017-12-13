/**
 * Created by XP on 2017/12/13.
 */
{
    let readonly = function (taeget,name,descriptor) {
        //不允许修改 只读
        descriptor.writable = false;
        return descriptor
    };

    class Test{
        @readonly
        time(){
            return '2017-12-13'
        }
    }

    let test = new Test();
    //不允许重新赋值
    //test.time = function () {
    //    console.log('reset time');
    //}
    console.log(test.time());
}

{
    let typename = function (target,name,descriptor) {
        //target指类的本身
        target.myname = 'hello';
    }

    @typename
    class Test{

    }

    console.log('类修饰符',Test.myname);
    //第三方库修饰器的js库 core-decorators
}

{
    let log = (type)=>{
        return function (target,name,descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg)=>{
                src_method.apply(target,arg);
                console.info('log '+type);
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }

        @log('click')
        click(){
            console.log('ad is click');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();

}