/*
* 接口，用来定义一个类接口，用来定义一个类中包含哪些属性和方法
* 同时野口也当成类型声明去使用
*
* */
interface myInterface{
    name:string
    age:number
}
const obj:myInterface = {
    name:'test',
    age:123
}
console.log(obj)
/*
* 接口可以在定义类的时候限制类的结构
* 接口中的所有的属性都不能有实际的值
* 接口只定义对象的结构，而不考虑实际值
*   在接口中所有的方法都是抽象方法
* */
interface myInter {
    name:string
    sayHello():void
}

/*
* 定义类时，可以使类去实现一个接口
*   实现接口就是使类满足接口的要求
* */
class MyClass implements myInter {
    name: string;

    constructor(name:string) {
        this.name = name
    }

    sayHello(){
        console.log(21321)
    }

}
