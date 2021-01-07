//引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
// 游戏控制器
class GameControl {
    constructor() {
        // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
        this.direction = '';
        // 创建一个属性记录游戏是否结束
        this.isLive = true;
        // 创建一个键盘按下的响应函数
        /*
        * ArrowUp Up
        * ArrowDown Down
        * ArrowLeft Left
        * ArrowRight Right
        * */
        this.keydownHandler = (event) => {
            this.direction = event.key;
            // this.run()
        };
        // 创建一个空值蛇移动的方法
        this.run = () => {
            /*
            * 根据this.direction来使蛇的位置改变
            * 向上 top 减少
            * 向下 top 增加
            * 向左 left 减少
            * 向右 left 增加
            * */
            // 获取蛇当前坐标
            let X = this.snake.X;
            let Y = this.snake.Y;
            switch (this.direction) {
                case 'ArrowUp':
                case 'Up':
                    Y -= 10;
                    break;
                case 'ArrowDown':
                case 'Down':
                    Y += 10;
                    break;
                case 'ArrowLeft':
                case 'Left':
                    X -= 10;
                    break;
                case 'ArrowRight':
                case 'Right':
                    X += 10.;
                    break;
                default:
                    break;
            }
            //判断吃食物
            this.checkEat(X, Y);
            try {
                this.snake.X = X;
                this.snake.Y = Y;
            }
            catch (e) {
                alert(e.message);
                this.isLive = false;
            }
            // 开启定时器
            this.isLive && setTimeout(this.run, 300 - (this.scorePanel.level - 1) * 30);
        };
        // 定义一个方法，检测蛇吃食物
        this.checkEat = (X, Y) => {
            if (X === this.food.X && Y === this.food.Y) {
                // 重置食物位置
                this.food.change();
                // 分数增加
                this.scorePanel.addScore();
                //蛇身增加
                this.snake.addBody();
            }
        };
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    // 初始化
    init() {
        // 绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler);
        this.run();
    }
}
export default GameControl;
