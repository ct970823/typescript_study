// 定义记分牌的类
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById('scoreEle');
        this.levelEle = document.getElementById('levelEle');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    // 设置加分方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        // 判断分数的多少
        if (this.score % this.upScore === 0)
            this.addLevel();
    }
    // 设置提升等级方法
    addLevel() {
        if (this.level < this.maxLevel)
            this.levelEle.innerHTML = ++this.level + '';
    }
}
export default ScorePanel;
//# sourceMappingURL=ScorePanel.js.map