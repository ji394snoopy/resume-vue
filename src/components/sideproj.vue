<template>
    <div class="segment hasRibbon">
        <a class="ui lightblue ribbon header" id="sideproj">SIDE PROJECT</a>
        <div class="segment-wrapper">
            <div class="list">
                <div class="item" v-for="proj in projects" :key="proj">
                    <div class="mainContent">
                        <div class="title">{{proj.name}}</div>
                        <div class="subtitle">{{proj.version}}</div>
                        <div class="content ui lightgreen roundbutton" v-for="tag in proj.tag" :key="tag">{{tag}}</div>
                    </div>
                    <div class="textContent">
                        <div>
                            <b>介紹：</b>
                            <p>{{proj.description}}</p>
                        </div>
                        <div>
                            <b>demo：</b>
                            <a :href="proj.demo">Go Demo !</a>
                        </div>
                        <div>
                            <b>github：</b><a :href="proj.github">{{proj.github}}</a>
                        </div>
                        <div v-if="proj.screenshot" class="screenshot">
                            <b>screen shots：</b>
                            <img :src="proj.screenshot" :alt="proj.name">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['projects']
}
</script>
<style>
.screenshot b{
    vertical-align: top;
}
.screenshot img{
    border-radius: 5px;
    margin-top: 5px;
    padding: 5px;
    max-width: 50%;
    border: 1px solid rgba(255, 255, 255, .5);
}
</style>
