export default function luckDraw(obj, callback) {
    this.timer = null //计时器
    this.startIndex = obj.startIndex - 1 || 0 //从第几个位置开始抽奖 [默认为零]
    this.count = 0 //计数，跑的圈数
    this.winningIndex = obj.winningIndex || 0 //获奖的位置
    this.totalCount = obj.totalCount || 6 //抽奖跑的圈数
    this.speed = obj.speed || 100
    this.domData = obj.domData
    this.rollFn()
    this.callback = callback
}

luckDraw.prototype = {
    rollFn: function () {
        var that = this
        // console.log(`获奖位置：${this.winningIndex}`)
        // 活动index值增加，即移动到下一个格子
        this.startIndex++

        //startIndex是最后一个时一圈走完，重新开始
        if (this.startIndex >= this.domData.length - 1) {
            this.startIndex = 0
            this.count++
        }

        // 当跑的圈数等于设置的圈数，且活动的index值是奖品的位置时停止
        if (this.count >= this.totalCount && this.startIndex === this.winningIndex) {
            if (typeof this.callback === 'function') {
                setTimeout(function () {
                    that.callback(that.startIndex, that.count) //执行回调函数，抽奖完成的相关操作
                }, 400)
            }
            clearInterval(this.timer)
        } else {
            //重新开始一圈
            if (this.count >= this.totalCount - 1) {
                this.speed += 30
            }
            this.timer = setTimeout(function () {
                that.callback(that.startIndex, that.count)
                that.rollFn()
            }, this.speed)
        }
    }
}
