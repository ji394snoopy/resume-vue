<template>
    <div id="mines" class="darkblue ui">
        <div class="container padding">
            <div class="padded controlArea">
                <Controlbar v-on:level="level===$event?initMineArea():sugarInit($event,initMineArea)" :startClock="isTicking" v-on:reset="initMineArea()"></Controlbar>
                <div class="controlObj flagCObj vertical-center horizontal-center" v-bind:class="{active:isFlaging}" v-on:click="isFlaging=!isFlaging">
                    <i class="fa fa-flag fa-2x word-lightred" aria-hidden="true"></i>
                </div>
                <div class="horizontal-center" v-for="mineColumn in Mines" :key="mineColumn">
                    <Mine v-for="mine in mineColumn" :key="mine" :x="mine.x" :y="mine.y" :flag.sync="mine.flag" :bomb="mine.bomb" :clickable.sync="mine.clickable" :isClicked.sync="mine.isClicked" :count="mine.count" :isFlaging="isFlaging" v-on:catchBomb="isgg=true,isTicking=false" v-on:catchZero="checkZero($event),winCountDown+=1" v-on:click.native="isTicking=isgg?false:true" v-on:gonnaWin="winCountDown-=1">
                    </Mine>
                    <div v-show="isgg" class="controlObj mask"></div>
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

    import Controlbar from './../components/mine-controlbar';
    import Mine from './../components/mine';

    export default {
        data() {
                return {
                    isTicking: false,
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
            components: {
                Controlbar,
                Mine
            },
            mounted: function() {
                this.sugarInit(1, this.initMineArea);
            },
            watch: {
                winCountDown: function(change) {
                    // console.log(change)
                    if (change === 0) {
                        console.log('win');
                        this.isTicking = false;
                        this.isgg = true;
                        var bomb = this.bomb;
                        for (var i = bomb.length - 1; i >= 0; i--) {
                            this.Mines[bomb[i].y][bomb[i].x].flag = true;
                            this.Mines[bomb[i].y][bomb[i].x].isClicked = true;
                        }
                    }
                }
            },
            methods: {
                sugarInit: function(lev, fn) {
                    this.initLevel(lev);
                    fn();
                },
                initLevel: function(lev) {
                    this.level = lev;
                    //選擇區域大小
                    switch (this.level) {
                        case 0:
                            this.mineSize = 5;
                            // this.mineCount = this.mineSize;
                            this.mineCount = 3;
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
                },
                initMineArea: function() {
                    //初始化
                    this.Mines = [];
                    this.isTicking = false;
                    this.isgg = false;
                    this.isFlaging = false;

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

                    // console.log(this.bomb);
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
                checkZero: function(mine) {
                    var x = mine.x,
                        y = mine.y,
                        limit = this.mineSize;
                    // console.log('x: ' + x + ', y: ' + y);
                    if (mine.isClicked || mine.flag) {
                        //return true;
                    } else if (mine.count > 0) {
                        if (!mine.isClicked) {
                            mine.isClicked = true;
                            this.winCountDown -= 1;
                        }
                        mine.clickable = false;
                    } else if (mine.count === 0) {
                        if (!mine.isClicked) {
                            mine.isClicked = true;
                            this.winCountDown -= 1;
                        }
                        mine.clickable = false;
                        ///FROM HERE////
                        //跑一次身邊九宮格
                        //左上
                        if (x - 1 >= 0 && y - 1 >= 0) {
                            this.checkZero(this.Mines[y - 1][x - 1]);
                        }
                        //上
                        if (y - 1 >= 0) {
                            this.checkZero(this.Mines[y - 1][x]);
                        }
                        //右上
                        if (x + 1 < limit && y - 1 >= 0) {
                            this.checkZero(this.Mines[y - 1][x + 1]);
                        }
                        //左
                        if (x - 1 >= 0) {
                            this.checkZero(this.Mines[y][x - 1]);
                        }
                        //右
                        if (x + 1 < limit) {
                            this.checkZero(this.Mines[y][x + 1]);
                        }
                        //左下
                        if (x - 1 >= 0 && y + 1 < limit) {
                            this.checkZero(this.Mines[y + 1][x - 1]);
                        }
                        //下
                        if (y + 1 < limit) {
                            this.checkZero(this.Mines[y + 1][x]);
                        }
                        //右下
                        if (x + 1 < limit && y + 1 < limit) {
                            this.checkZero(this.Mines[y + 1][x + 1]);
                        }
                    }
                },
            }
    }

    function returnBombPoint(limit) {
        var theNumber = Math.random();
        var x = Math.floor(theNumber * 100 % limit);
        theNumber = Math.random();
        var y = Math.floor(theNumber * 100 % limit);
        return {
            "x": x,
            "y": y
        };
    }

    function findSameXY(compareArr, obj) {
        for (var i = compareArr.length - 1; i >= 0; i--) {
            if (compareArr[i].x >= 0 && obj.x >= 0) {
                if (compareArr[i].x == obj.x && compareArr[i].y == obj.y) {
                    return true;
                }
            } else {
                return false;
            }
        }
        return false;
    }

</script>
<style>
    #mines {
        min-height: 100vh;
    }
    
    #mineArea {
        position: relative;
    }
    
    a {
        cursor: pointer;
    }
    
    .controlArea {
        position: relative;
    }
    
    .controlObj {
        position: absolute;
    }
    
    .flagCObj {
        display: inline-block;
        right: 3em;
        top: 7em;
        width: 3em;
        height: 3em;
        border-radius: 5px;
        border: 2px solid #f3f3f3;
        background-color: #333;
    }
    
    .flagCObj.active {
        background-color: #fff;
    }
    
    .mask {
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
    }

</style>

