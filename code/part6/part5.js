/*
* 泛型
* 在定义函数或类时，如果遇到类型不明确就可以使用泛型
*
* */
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
fn(1); // 不指定泛型，TS自动对类型进行他推断
fn('haha'); // 指定泛型
function fn2(a, b) {
    return a;
}
fn2(123, '333');
// T extends Inter 表示泛型必须是Inter的实现类（子类）
function fn3(a) {
    return a.length;
}
fn3([1, 2, 3]);
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    return MyClass;
}());
var mc = new MyClass('张三');
