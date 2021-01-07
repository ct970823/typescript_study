/*
* 泛型
* 在定义函数或类时，如果遇到类型不明确就可以使用泛型
*
* */

function fn<T>(a:T):T{
    return a
}

// 可以直接调用具有泛型的函数
fn(1) // 不指定泛型，TS自动对类型进行他推断
fn<string>('haha') // 指定泛型


function fn2<T,K>(a:T,b:K):T{
    return a
}
fn2<number,string>(123,'333')

interface Inter{
    length:number
}
// T extends Inter 表示泛型必须是Inter的实现类（子类）
function fn3<T extends Inter>(a:T):number{
    return a.length
}
fn3([1,2,3])

class MyClass<T>{
    constructor(public name:T) {
    }
}
const mc = new MyClass<string>('张三')
