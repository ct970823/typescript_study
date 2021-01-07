// 属性的封装
(function (){
    // 定义一个类
    class Person {
        /*
        * TS可以在属性面前添加属性的修饰符
        * public 修饰的属性可以在任意位置访问（修改）默认值,包括子类
        * private 私有属性，只能在类的内部访问（修改）
        *       - 通过在类中定义方法来使外部可以调用方法来访问（修改）
        * protected 受包含的属性，只能在当前类和子类中访问
        * */
        private _name:string
        private _age:number
        constructor(name:string,age:number) {
            this._name = name
            this._age = age
        }
        /*
        *   getter方法用来读取属性
        *   setter方法用来设置属性
        *       - 他们被称为属性的存取器
        * */
        // 定义方法，获取name
        // getName(){
        //     return this._name
        // }
        // 定义方法，设置name
        // setName(value:string){
        //     this._name = value
        // }

        // TS中设置getter方法的方式
        get name(){
            return this.name
        }
        set name(value:string){
            this.name = value
        }
    }
    const per = new Person('张三',18)
    // per._name = '李四' 私有属性报错

    // per.getName()
    // per.setName('李四')

    console.log(per.name)
    per.name = '李四'
})()
