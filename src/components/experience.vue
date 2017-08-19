<template>
    <div class="segment hasRibbon">
        <a class="ui lightblue ribbon header" id="experience">EXPERIENCE</a>
        <div class="segment-wrapper">
            <div class="list">
                <div class="item" v-for="exp in experience" :key="exp">
                    <div class="mainContent">
                        <div class="title">{{exp.company}}</div>
                        <div class="subtitle">{{exp.job}}</div>
                        <div class="content ui lightblue roundbutton">{{exp.time}}</div>
                    </div>
                    <div class="textContent">
                        <ul>
                            <li v-for="detail in exp.detail" :key="detail">{{detail}}</li>
                            <li>工作所運用到的技術 :
                                <ol>
                                    <li v-for="tech in exp.tech" :key="tech">{{tech}}</li>
                                </ol>
                            </li>
                            <li v-if="exp.works">作品 :
                                <ol>
                                    <li v-for="work in exp.works" :key="work">
                                        <span v-if="work.href">{{work.title}}:
                                            <a :href="work.href" class="link">{{work.href}}</a>
                                        </span>
                                        <span v-if="work.modal">
                                            <a class="link" v-on:click="modal[work.bind] = !modal[work.bind]">{{work.title}}</a>
                                        </span>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['experience', 'modal']
}
</script>
