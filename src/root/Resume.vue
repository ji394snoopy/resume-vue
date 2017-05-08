<template>
    <div id="resume">
        <Navigationbar></Navigationbar>
        <div class="padded container">
            <div class="lightshad">
                <section>
                    <div class="rows">
                        <About :aboutme="data.aboutme"></About>
                        <Award :awards="data.awards"></Award>
                    </div>
                </section>
                <section>
                    <Skill :skills="data.skills"></Skill>
                </section>
                <section class="ui darkblue">
                    <Experience :experience="data.experience" :modal="modal"></Experience>
                </section>
                <section class="ui darkblue">
                    <Education :education="data.education" :modal="modal"></Education>
                </section>
                <section class="ui darkblue">
                    <Introduction></Introduction>
                </section>
            </div>
        </div>
        <!-- modals -->
        <ModalWrapper v-bind:is-show="modal.ibusker||modal.uaver">
            <PictureModal v-if="modal.ibusker" v-bind:pictures="data.ibuskerPics" v-on:close="modal.ibusker=false"></PictureModal>
            <PictureModal v-if="modal.uaver" v-bind:pictures="data.uaverPics" v-on:close="modal.uaver=false"></PictureModal>
        </ModalWrapper>
    </div>
</template>
<script>
import Navigationbar from './../components/header';
import About from './../components/about'
import Award from './../components/award'
import Skill from './../components/skill'
import Experience from './../components/experience'
import Education from './../components/education'
import Introduction from './../components/introduction'
import ModalWrapper from './../layouts/modal-wrapper'
import PictureModal from './../layouts/picture-modal'
import ResumeData from './../assets/data'

export default {
    data() {
            return {
                data: ResumeData,
                modal: {
                    ibusker: false,
                    lifeline: false,
                    dreamlearn: false,
                    uaver: false
                }
            }
        },
        components: {
            Navigationbar,
            About,
            Award,
            Skill,
            Experience,
            Education,
            Introduction,
            ModalWrapper,
            PictureModal
        },
        mounted: function() {
            //what this does?
            this.isMobile = document.clientWidth <= 768;
        }
}
</script>
<style>
.mainContent .title,
.mainContent .subtitle,
.mainContent .content {
    margin: 3px 1em 3px 0;
}

a.link {
    color: #fdd76b;
    cursor: pointer;
}

@media screen and (max-width: 425px) {
    ol,
    ul {
        padding-left: 1.5em;
    }
    * {
        word-wrap: break-word;
    }
}
</style>
