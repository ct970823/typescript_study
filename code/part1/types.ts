//也可以使用字面量进行类型申明
let a: 10
a = 10

//也可以使用 | 来连接多个类型 （联合类型）
let b: "male" | "female"
b = "male"
b = "female"

// any 表示是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let c: any
//申明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let c
c = 10
c = 'hello'
c = true

// unknown 表示未知类型的值
// unknown 实际上是一个类型安全的any
// unknown类型的变量不能直接赋值给其他变量
let d: unknown
d = 10
d = 'hello'
d = true

//类型断言
/*
* 语法：
* 变量 as 类型
* <类型>变量
* */
let e:string
d = '21321'
e = d as string
e = <string>e

// void 用来表示空，以函数为例，表示没有返回值的函数 （undefined和null都表示空）
function fn(){

}

//never表示永远不会返回结果 （用于抛出报错）
function fn2():never{
    throw new Error('报错了')
}

//object
let obj:object
// {} 用来指定对象中可以包含哪些属性
//在属性名后面加?表示可选属性
//[propName: string]:any 表示任意类型的属性，属性名类型为string
let obj2:{
    name:string,
    age?:number,
    [propName: string]:any
}
// obj2 = {}//报错 必须写里面的属性

/*
* 这是函数的结构的类型申明
* 语法：(形参:类型...)=>返回值
* */
let fun: (a:number,b:number)=>number

//string[]表示字符串数组
//Array<string>表示字符串数组
let arr: string[]
arr = ['1','2']

let arr2:Array<string>
arr2 = ['a','b']

/*
* 元组，就是固定长度的数组
* 语法：[类型,类型,类型,...]
* */
let arr3:[string,string]
arr3 = ['123','456']
// arr3 = ['123','456','789'] 长度固定，必须两个
// arr3 = ['123'] 长度固定，必须两个

/*
* 枚举
* */
enum Gender{
    Male,
    Female
}

let i:{name:string,gender:Gender}
i = {
    name:'xxx',
    gender:Gender.Male
}
console.log(i.gender === Gender.Male)

//&表示同时
let j: {name:string} & {age:number} //表示既要有name还要有age
j = {name:'xxx',age:18}

//类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let k:myType
