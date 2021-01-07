// 定义蛇的类
class Snake {
    constructor() {
        // 移动身体
        this.moveBody = () => {
            /*
            * 将后边身体的位置设为前面身体的位置
            * */
            // 遍历获取所有身体
            for (let i = this.bodies.length - 1; i > 0; i--) {
                // 获取前一个身体的位置
                const preBodyX = this.bodies[i - 1].offsetLeft;
                const preBodyY = this.bodies[i - 1].offsetTop;
                // 将值设置到当前身体上
                this.bodies[i].style.top = preBodyY + 'px';
                this.bodies[i].style.left = preBodyX + 'px';
            }
        };
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake>div');
        this.bodies = document.getElementById('snake').getElementsByTagName('div');
    }
    // 获取蛇头x坐标
    get X() {
        return this.head.offsetLeft;
    }
    // 获取蛇头y坐标
    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇头x坐标
    set X(value) {
        if (this.X === value) {
            return;
        }
        // 判断撞墙 0-290
        if (value < 0 || value > 290) {
            throw new Error('游戏结束！');
        }
        // 处理蛇掉头bug 左行不能像右走
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            if (value > this.X) {
                // 如果value>X说明在向右走，此时发生掉头
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    // 设置蛇头y坐标
    set Y(value) {
        if (this.Y === value) {
            return;
        }
        // 判断撞墙 0-290
        if (value < 0 || value > 290) {
            throw new Error('游戏结束！');
        }
        // 处理蛇掉头bug 左行不能像右走
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            if (value > this.Y) {
                // 如果value>X说明在向右走，此时发生掉头
                value = this.Y - 10;
            }
            else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }
    // 蛇增加身体的方法
    addBody() {
        this.element.insertAdjacentHTML("beforeend", '<div></div>');
    }
    // 判断撞身提
    checkHeadBody() {
        // 获取所有身体，检查坐标是否与蛇头发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i];
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('游戏结束！');
            }
        }
    }
}
export default Snake;
