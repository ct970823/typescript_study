//也可以使用字面量进行类型申明
var a;
a = 10;
//也可以使用 | 来连接多个类型 （联合类型）
var b;
b = "male";
b = "female";
// any 表示是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let c: any
//申明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
var c;
c = 10;
c = 'hello';
c = true;
// unknown 表示未知类型的值
// unknown 实际上是一个类型安全的any
// unknown类型的变量不能直接赋值给其他变量
var d;
d = 10;
d = 'hello';
d = true;
//类型断言
/*
* 语法：
* 变量 as 类型
* <类型>变量
* */
var e;
d = '21321';
e = d;
e = e;
// void 用来表示空，以函数为例，表示没有返回值的函数 （undefined和null都表示空）
function fn() {
}
//never表示永远不会返回结果 （用于抛出报错）
function fn2() {
    throw new Error('报错了');
}
//object
var obj;
// {} 用来指定对象中可以包含哪些属性
//在属性名后面加?表示可选属性
//[propName: string]:any 表示任意类型的属性，属性名类型为string
var obj2;
// obj2 = {}//报错 必须写里面的属性
/*
* 这是函数的结构的类型申明
* 语法：(形参:类型...)=>返回值
* */
var fun;
//string[]表示字符串数组
//Array<string>表示字符串数组
var arr;
arr = ['1', '2'];
var arr2;
arr2 = ['a', 'b'];
/*
* 元组，就是固定长度的数组
* 语法：[类型,类型,类型,...]
* */
var arr3;
arr3 = ['123', '456'];
// arr3 = ['123','456','789'] 长度固定，必须两个
// arr3 = ['123'] 长度固定，必须两个
/*
* 枚举
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'xxx',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
//&表示同时
var j; //表示既要有name还要有age
j = { name: 'xxx', age: 18 };
var k;
