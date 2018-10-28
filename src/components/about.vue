<template>
  <div class="responsive segment hasRibbon cell two">
    <a class="ui darkblue ribbon header" id="aboutme">ABOUT ME</a>
    <div class="segment-wrapper">
      <div class="list">
        <div class="item">
          <table class="about-table">
            <tbody>
              <tr>
                <td class="title word-darkblue"><i class="icon fa fa-lg fa-user"></i></td>
                <td class="content">{{aboutme.name}}</td>
              </tr>
              <tr>
                <td class="title word-darkblue"><i class="icon fa fa-lg fa-envelope"></i></td>
                <td class="content"><a class="word-darkblue" :href="'mailto:'+aboutme.mail">{{aboutme.mail}}</a></td>
              </tr>
              <tr>
                <td class="title word-darkblue"><i class="icon fa fa-lg fa-phone"></i></td>
                <td class="content"><a class="word-darkblue" :href="'tel:+'+aboutme.myPhone">{{aboutme.phone}}</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="textContent">
          <p>{{aboutme.intro}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['aboutme']
};
</script>

<style scoped>
.about-table td:first-of-type {
  width: 3rem;
  text-align: center;
}
.about-table td {
  padding-top: 0.7rem;
}
</style>
