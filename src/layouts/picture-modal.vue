<template>
    <div class="modal">
        <div class="content ui" v-bind:class="{contentColor:hasColor,'white':!hasColor}">
            <div class="header">
                <a class="close word-white" v-on:click="$emit('close')"></a>
            </div>
            <div class="body padded">
                <div class="img-wrapper" v-for="(picture,index) in pictures" :key="picture" v-if="current===index">
                    <img :src="picture.href" alt="picture.name">
                </div>
                <div class="navbar">
                    <a class="right word-white" v-on:click="rightslide"></a>
                    <a class="left word-white" v-on:click="leftslide"></a>
                </div>
            </div>
            <div class="footer padded">
                <ul>
                    <li v-for="(picture,index) in pictures" :key="picture" v-on:click="current = index"><span class="circle" v-bind:class="{'active':current===index}"></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            current: 0
        }
    },
    props: ['contentColor', 'pictures'],
    methods: {
        rightslide: function() {
            this.current + 1 < this.pictures.length ? this.current += 1 : this.current = 0;
        },
        leftslide: function() {
            this.current - 1 >= 0 ? this.current -= 1 : this.current = this.pictures.length - 1;
        }
    },
    computed: {
        hasColor: function() {
            return this.contentColor != null;
        }
    }
}
</script>
<style>
/* modal */

.modal {
    position: relative;
    width: 75%;
    height: 80%;
    top: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 101;
    border-radius: 5px;
}

.modal .close {
    position: absolute;
    top: 5%;
    right: 5%;
    display: block;
}

.modal .close:before,
.modal .close:after {
    display: block;
    content: '';
    width: 3px;
    height: 1.5em;
    background-color: #fff;
    top: 0;
    position: absolute;
    border-radius: 10px;
    cursor: pointer;
}

.modal .close:after {
    transform: rotate(-45deg);
}

.modal .close:before {
    transform: rotate(45deg);
}

.modal .header {
    position: relative;
    max-height: 25%;
    min-height: 2.1em;
    overflow-x: hidden;
    overflow-y: auto;
}

.modal .body {
    position: relative;
}

.modal .navbar > * {
    position: absolute;
    display: block;
}

.modal .navbar .right:before,
.modal .navbar .left:before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    border: 15px solid transparent;
    border-radius: 3px;
    cursor: pointer;
}

.modal .navbar .left:before {
    border-right-color: #fff;
}

.modal .navbar .right:before {
    border-left-color: #fff;
}

.modal .navbar .left {
    top: 50%;
    left: -2.5%;
}

.modal .navbar .right {
    top: 50%;
    right: -2.5%;
}

.modal .footer {
    text-align: center;
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: auto;
}

.modal .footer .circle {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 100%;
    border: 2px solid #fff;
    background-color: transparent;
}

.modal .footer .active {
    background-color: #fff;
}

.modal .footer ul {
    list-style: none;
    padding: 0;
}

.modal .footer li {
    display: inline-block;
}

.modal .img-wrapper {
    max-width: 70vh;
    height: 70vh;
    text-align: center;
    margin: 0 auto;
}

.modal .img-wrapper>img {
    max-height: 70vh;
    border-radius: 3px;
}
</style>
