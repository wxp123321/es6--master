/**
 * Created by XP on 2017/12/11.
 */
{
    class Parent{
        constructor(name='lalala'){
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    let v_parent2 = new Parent();
    console.log('构造函数实例',v_parent);
    console.log('构造函数实例2',v_parent2);
}

{
    class Parent{
        constructor(name='lalala'){
            this.name = name;
        }
    }

    class Child extends Parent{

    }

    console.log('继承',new Child());
}

{
    class Parent{
        constructor(name='lalala'){
            this.name = name;
        }
    }

    class Child extends Parent{
        constructor(name = 'child'){
            super(name);
            this.type = 'child';
        }
    }

    console.log('继承传递参数',new Child('hello'));
}

{
    //getter setter
    class Parent{
        constructor(name = 'lalala'){
            this.name = name;
        }

        get longName(){
            return 'mk'+this.name;
        }

        set longName(value){
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = 'world';
    console.log('setter',v.longName);
}

{
    //静态方法
    class Parent{
        constructor(name='lalala'){
            this.name = name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.tell();

}

{
    //静态属性
    class Parent{
        constructor(name='lalala'){
            this.name = name;
        }

        static tell(){
            console.log('tell');
        }
    }

    Parent.type = 'test';

    console.log('静态属性',Parent.type);
}
