<template>
    <div class="responsive segment hasRibbon cell three">
        <a class="ui darkblue reverse ribbon header" id="awards">AWARDS</a>
        <div class="segment-wrapper">
            <div class="textContent">
                <a class="header large word-darkblue" href="#ibusker">iBusker--具人文內涵的城市旅遊App</a>
                <ul>獲得獎項:
                    <li v-for="award in awards">{{award}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['awards'],
}
</script>

