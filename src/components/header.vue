<template>
    <header class="ui fluid container gray Header" id="banner">
        <div class="ui container very padded">
            <h1 class="word-darkblue">JYUAN HUANG</h1>
            <div class="word-darkblue sub">FRONT END DEVELOPER</div>
            <a class="hamburger ui darkblue horizontal-center" v-bind:class="{active: menuIsActive}" v-on:click="menuIsActive = !menuIsActive">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </a>
            <nav class="Nav" v-bind:class="{active: menuIsActive}" v-on:click="menuIsActive = !menuIsActive">
                <div class="ui darkblue menu">
                    <div class="rows justify">
                        <a class="item" href="#aboutme">ABOUT</a>
                        <a class="item" href="#awards">AWARDS</a>
                        <a class="item" href="#skills">SKILLS</a>
                        <a class="item" href="#experience">EXPERIENCE</a>
                        <a class="item" href="#education">EDUCATION</a></div>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    data: function() {
        return {
            menuIsActive: false
        }
    }
}
</script>
<style>
.Nav {
    margin-top: 30px;
}

@media screen and (max-width: 768px) {
    .Nav {
        visibility: hidden;
        position: fixed;
        top: 1em;
        right: 1em;
        margin: 0;
        z-index: 20;
        transition: .5s;
        -webkit-transition: .5s;
        opacity: 0;
    }
    .Nav.active {
        visibility: visible;
        opacity: 1;
    }
}
</style>
