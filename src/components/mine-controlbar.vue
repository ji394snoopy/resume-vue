<template>
    <div class="padded horizontal-center controlArea">
        <a class="roundbutton ui lightblue" v-on:click="$emit('level',level)">RESET</a>
        <a class="roundbutton ui" v-on:click="$emit('level',0)" v-bind:class="{yellow:level==0,lightblue:level!=0}">LEVEL-1</a>
        <a class="roundbutton ui" v-on:click="$emit('level',1)" v-bind:class="{yellow:level==1,lightblue:level!=1}">LEVEL-2</a>
        <a class="roundbutton ui" v-on:click="$emit('level',2)" v-bind:class="{yellow:level==2,lightblue:level!=2}">LEVEL-3</a>
        <div class="roundbutton controlObj timerCObj">
            <i class="fa fa-clock-o fa-2x word lightred" aria-hidden="true"></i><span class="word lightred">{{timer.mm}} : {{timer.ss}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            timer: {
                start: 0,
                mm: 0,
                ss: 0
            }
        }
    },
    props: ['level','isTicking'],
    methods: {
        timerCount: function() {
            var d = Date.now(),
                diff = d - this.timer.start;
            this.timer.mm = Math.floor(diff / 60000);
            this.timer.ss = Math.floor((diff % 60000) / 1000);
        }
    }
}
</script>
