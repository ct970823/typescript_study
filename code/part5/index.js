// 属性的封装
(function () {
    // 定义一个类
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        Object.defineProperty(Person.prototype, "name", {
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
            get: function () {
                return this.name;
            },
            set: function (value) {
                this.name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var per = new Person('张三', 18);
    // per._name = '李四' 私有属性报错
    // per.getName()
    // per.setName('李四')
    console.log(per.name);
    per.name = '李四';
})();
