//申明一个变量a，同时指定他的类型为number
let a:number;
//a的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10
//a = 'sss'//此代码会报错，因为a的类型是number，不能赋值为string

let b: boolean = true
// 如果变量的申明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false

//JS中的函数是不考虑参数的类型和个数的
// function sum(a,b){
//     return a+b
// }
// console.log(sum(123,456)) //579
// console.log(sum(123,'456')) //'123456'

// sum():number表示函数的返回值类型
function sum(a: number, b: number):number{
    return a + b
}
// console.log(sum(123,'456')) //报错
