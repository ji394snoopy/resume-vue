<template>
    <div class="segment hasRibbon">
        <a class="ui lightblue ribbon header" id="education">EDUCATION</a>
        <div class="segment-wrapper">
            <div class="list">
                <div class="item">
                    <div class="mainContent">
                        <div class="title">{{education.school}}</div>
                        <div class="subtitle">{{education.department}}</div>
                        <div class="content ui lightblue roundbutton">{{education.time}}</div>
                    </div>
                    <div class="textContent">
                        <p>專題三人團隊，以街頭藝人為出發點開發行動App--iBusker。以Html5、Css、JavaScript為基礎並由PhoneGap把網頁包裝成行動App，後端以雲端SAAS平台Parse.com(已關閉)和Heroku建立，並結合Beacon和定位技術發送通知給使用者。 此構想獲得教授們的青睞，也參加許多比賽獲得佳績。
                        </p>
                        <p>
                            作品： <a class="link" v-on:click="modal.ibusker = !modal.ibusker" id="ibusker">iBusker</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['education','modal']
}
</script>
