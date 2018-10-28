<template>
    <div class="segment hasRibbon">
        <a class="ui lightblue ribbon header" id="introduction">INTRODUCTION</a>
        <div class="segment-wrapper">
            <div class="textContent">
                <p>{{introduction}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['introduction']
}
</script>
