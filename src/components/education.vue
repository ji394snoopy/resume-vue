<template>
    <div class="segment hasRibbon">
        <a class="ui lightblue ribbon header" id="education">Education</a>
        <div class="segment-wrapper">
            <div class="list">
                <div class="item">
                    <div class="mainContent">
                        <div class="title">{{education.school}}</div>
                        <div class="subtitle">{{education.department}}</div>
                        <div class="content ui lightblue roundbutton">{{education.time}}</div>
                    </div>
                    <div class="textContent">
                        <p>
                            <ul>課程內容資訊和管理參半
                                <li>管理課程: 經濟學、管理學、統計學、初等會計學、財務管理 ... ...</li>
                                <li>資訊課程: Java、Mysql(PHP)、Html/JavaScript、XML、專案管理 ... ...</li>
                                <li>個人選擇: C++/Cli(資工)、SAS ... ...</li>
                            </ul>
                        </p>
                        <p>大三專題三人團隊，以街頭藝人為出發點開發行動App--iBusker。以Html5、Css、JavaScript為基礎並由PhoneGap把網頁包裝成行動App，後端以雲端SAAS平台Parse.com(已關閉)和Heroku建立，並結合Beacon和定位技術發送通知給使用者。 此構想獲得教授們的青睞，也參加許多比賽獲得佳績。
                        </p>
                        <p>
                            作品： <a class="link" v-on:click="modal.ibusker = !modal.ibusker" id="ibusker">iBusker</a>
                        </p>
                        <p>
                            <ul>其他事蹟:
                                <li>擔任2年系學會幹部，並曾擔任系上大型活動總召和多個小活動組長</li>
                                <li>曾參加咖啡研究社</li>
                            </ul>
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
