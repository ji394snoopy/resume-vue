<template>
    <div id="mines">
        <div class="container padding">
            <div class="padded controlArea">
                <Controlbar v-on:level="initMineArea($event.target.value)"></Controlbar>
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

}
</script>
