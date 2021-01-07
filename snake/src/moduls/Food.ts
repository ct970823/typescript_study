//定义食物类food
class Food {
    // 定义一个属性表示食物对应的元素
    element:HTMLElement;
    constructor() {
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!
    }

    // 定义获取食物x坐标的方法
    get X(){
        return this.element.offsetLeft
    }
    // 定义获取食物Y坐标的方法
    get Y(){
        return this.element.offsetTop
    }
    // 修改食物位置的方法
    change(){
        // 生成随机位置 top：0-290 left：0-290  必须是10的倍数
        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.left = top + 'px'
        this.element.style.top = left + 'px'
    }
}
export  default  Food
