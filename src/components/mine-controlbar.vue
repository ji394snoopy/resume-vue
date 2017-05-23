<template>
    <div id="controlbar" class="padded horizontal-center controlArea">
        <a class="roundbutton ui lightred" href="resume">Back</a>
        <a class="roundbutton ui lightblue" v-on:click="$emit('reset')">RESET</a>
        <a class="roundbutton ui" v-on:click="$emit('level',0)" v-bind:class="{yellow:level==0,lightblue:level!=0}">LEVEL-1</a>
        <a class="roundbutton ui" v-on:click="$emit('level',1)" v-bind:class="{yellow:level==1,lightblue:level!=1}">LEVEL-2</a>
        <a class="roundbutton ui" v-on:click="$emit('level',2)" v-bind:class="{yellow:level==2,lightblue:level!=2}">LEVEL-3</a>
        <div class="roundbutton controlObj timerCObj">
            <i class="fa fa-clock-o fa-2x word-lightred" aria-hidden="true"></i><span class="word-lightred">{{timer.mm}} : {{timer.ss}}</span>
        </div>
    </div>
</template>
<script>
    var timerInterval = null;
    export default {
        data() {
                return {
                    timer: {
                        start: 0,
                        mm: 0,
                        ss: 0
                    }
                }
            },
            props: ['level', 'startClock'],
            methods: {
                timerCount: function() {
                    var d = Date.now(),
                        diff = d - this.timer.start;
                    this.timer.mm = Math.floor(diff / 60000);
                    this.timer.ss = Math.floor((diff % 60000) / 1000);
                }
            },
            watch: {
                startClock: function(trigger) {
                    if (trigger) {
                        this.timer.start = Date.now();
                        timerInterval = setInterval(this.timerCount, 1000);
                    } else {
                        clearInterval(timerInterval);
                    }
                }
            }
    }

</script>
<style>
    .timerCObj {
        display: inline-block;
        right: 2em;
        top: 1em;
        border: 2px solid #f3f3f3;
    }
    
    .timerCObj > i {
        margin-right: 10px;
    }

</style>

