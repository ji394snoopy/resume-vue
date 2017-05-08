<template>
    <div id="mines">
        <div class="container padding">
            <div class="padded controlArea">
                <Controlbar v-on:level="initMineArea($event.target.value)" :isTicking="startClock"></Controlbar>
                <div class="controlObj flagCObj vertical-center horizontal-center" v-bind:class="{active:isFlaging}" v-on:click="isFlaging=!isFlaging">
                    <i class="fa fa-flag fa-2x word lightred" aria-hidden="true"></i>
                </div>
                <div class="column horizontal-center" v-for="mineColumn in Mines">
                    <a class="mine vertical-center" v-for="mine in mineColumn" v-on:click.left="isFlaging?flagOnClick(mine):mineOnClick(mine)">
                        <div class="word" v-show="mine.isClicked" v-bind:class="{lightred:mine.bomb||mine.flag,lightblue:!mine.bomb&&!mine.flag}">{{mineValue(mine)}}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// local>
// level: 0 等級
// mineSize: 0 區域大小
// mineCount: 0 地雷數量
// Mines: [] 地雷
// isgg:false gg
// isTicking: false 開始計時沒?
// isFlaging: false 是否插旗動作
//
// timer:>
// start: 起始時間豪秒數
// mm: 換算分鐘數
// ss: 換算秒數
//
// mine>
// x: j, 位置x
// y: i, 位置y
// flag: false, 是否被插旗
// bomb: false, 是否有炸彈
// clickable: true, 可否被點擊(flag/已點開後不能點)
// isClicked: false, 是否被點擊
// count: 0 附近炸彈數量

import Controlbar from './../components/mine-controlbar'

export default {
    data: function() {
        return {
            startClock: false,
            level: 0,
            mineSize: 0,
            mineCount: 0,
            Mines: [],
            bomb: [],
            isFlaging: false,
            winCountDown: 0,
            isgg: false
        }
    },
    methods: {
        initMineArea: function(lev) {
            //初始化
            this.level = lev;
            this.Mines = [];
            this.isTicking = false;
            this.isgg = false;
            this.isFlaging = false;
            this.timer = {
                start: 0,
                mm: 0,
                ss: 0
            };
            //選擇區域大小
            switch (this.level) {
                case 0:
                    this.mineSize = 5;
                    //this.mineCount = this.mineSize;
                    this.mineCount = 1;
                    break;
                case 1:
                    this.mineSize = 7;
                    this.mineCount = this.mineSize;
                    break;
                case 2:
                    this.mineSize = 10;
                    this.mineCount = this.mineSize;
                    break;
                default:
                    this.mineSize = 5;
                    break;
            }
            //設定獲勝條件
            this.winCountDown = this.mineSize * this.mineSize - this.mineCount;
            //邊界
            var limit = this.mineSize;
            //初始埋下地雷
            for (var i = 0; i < limit; i++) {
                var col = [];
                for (var j = 0; j < limit; j++) {
                    var mine = {
                        x: j,
                        y: i,
                        flag: false,
                        bomb: false,
                        clickable: true,
                        isClicked: false,
                        count: 0
                    };
                    col.push(mine);
                }
                this.Mines.push(col);
            }
            //設定炸彈
            var tempbombs = [];
            for (i = 0; i < this.mineCount; i++) {
                var temp;
                do {
                    temp = returnBombPoint(limit);
                } while (findSameXY(tempbombs, temp));
                //設定地雷區炸彈
                this.Mines[temp.y][temp.x].bomb = true;
                this.Mines[temp.y][temp.x].count = -1;
                tempbombs.push(temp);
            }
            this.bomb = tempbombs;

            console.log(this.bomb);
            //計算count
            for (var i = this.bomb.length - 1; i >= 0; i--) {
                var x = this.bomb[i].x;
                var y = this.bomb[i].y;
                //跑一次身邊九宮格
                //左上
                if (x - 1 >= 0 && y - 1 >= 0) {
                    if (!this.Mines[y - 1][x - 1].bomb) {
                        this.Mines[y - 1][x - 1].count += 1;
                    }
                }
                //上
                if (y - 1 >= 0) {
                    if (!this.Mines[y - 1][x].bomb) {
                        this.Mines[y - 1][x].count += 1;
                    }
                }
                //右上
                if (x + 1 < limit && y - 1 >= 0) {
                    if (!this.Mines[y - 1][x + 1].bomb) {
                        this.Mines[y - 1][x + 1].count += 1;
                    }
                }
                //左
                if (x - 1 >= 0) {
                    if (!this.Mines[y][x - 1].bomb) {
                        this.Mines[y][x - 1].count += 1;
                    }
                }
                //右
                if (x + 1 < limit) {
                    if (!this.Mines[y][x + 1].bomb) {
                        this.Mines[y][x + 1].count += 1;
                    }
                }
                //左下
                if (x - 1 >= 0 && y + 1 < limit) {
                    if (!this.Mines[y + 1][x - 1].bomb) {
                        this.Mines[y + 1][x - 1].count += 1;
                    }
                }
                //下
                if (y + 1 < limit) {
                    if (!this.Mines[y + 1][x].bomb) {
                        this.Mines[y + 1][x].count += 1;
                    }
                }
                //右下
                if (x + 1 < limit && y + 1 < limit) {
                    if (!this.Mines[y + 1][x + 1].bomb) {
                        this.Mines[y + 1][x + 1].count += 1;
                    }
                }
            }
        },
    }
}
</script>
<style></style>
