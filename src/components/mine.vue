<template>
    <a class="mine vertical-center" v-on:click="isFlaging?flagOnClick():mineOnClick()">
        <div v-show="isClicked" v-bind:class="{'word-lightred':bomb||flag,'word-lightblue':!bomb&&!flag}">{{mineValue}}</div>
    </a>
</template>
<script>
    export default {
        data() {
                return {}
            },
            props: ['x', 'y', 'flag', 'bomb', 'clickable', 'isClicked', 'count', 'isFlaging'],
            computed: {
                mineValue: function() {
                    if (this.flag) {
                        return 'F';
                    } else if (this.count === -1) {
                        return 'B';
                    } else {
                        return this.count;
                    }
                }
            },
            methods: {
                mineOnClick: function() {
                    if (this.clickable) {
                        if (this.count === 0) {
                            this.$emit('catchZero', {
                                x: this.x,
                                y: this.y,
                                count: this.count,
                                isClicked: this.isClicked
                            });
                        } else if (this.count === -1) {
                            console.log('bomb!');
                            this.$emit('catchBomb');
                        } else {
                            this.$emit('gonnaWin');
                        }
                        this.$emit('update:isClicked', true);
                        this.$emit('update:clickable', false);
                    }
                },
                flagOnClick: function() {
                    if (this.flag) {
                        this.$emit('update:flag', false);
                        this.$emit('update:isClicked', false);
                        this.$emit('update:clickable', true);
                    } else {
                        this.$emit('update:flag', true);
                        this.$emit('update:isClicked', true);
                        this.$emit('update:clickable', false);
                    }

                },
            }
    }

</script>
<style>
    .mine {
        width: 2em;
        height: 2em;
        background-color: #fff;
        margin: 3px;
        display: inline-block;
        position: relative;
        font-weight: 700;
    }
    
    .mine > div {
        position: absolute;
        width: 100%;
    }

</style>

