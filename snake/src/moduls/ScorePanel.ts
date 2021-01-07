// 定义记分牌的类
class ScorePanel {
    score = 0
    level = 1
    scoreEle:HTMLElement
    levelEle:HTMLElement
    // 最大等级
    maxLevel:number
    // 多少分升级
    upScore:number
    constructor(maxLevel:number = 10,upScore:number = 10) {
        this.scoreEle = document.getElementById('scoreEle')!
        this.levelEle = document.getElementById('levelEle')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置加分方法
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''
        // 判断分数的多少
        if(this.score % this.upScore === 0)
            this.addLevel()
    }
    // 设置提升等级方法
    addLevel(){
        if(this.level < this.maxLevel)
            this.levelEle.innerHTML = ++this.level + ''
    }
}
export default ScorePanel
