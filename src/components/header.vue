<template>
  <header class="ui fluid container gray Header" id="banner">
    <div class="ui container very padded">
      <h1 class="word-darkblue">JUAN HUANG</h1>
      <div class="word-darkblue sub">FRONT END DEVELOPER
        <transition
          enter-active-class="pop-out"
          leave-active-class="right-out">
          <div class="list fixed-social-icons"
              v-show="mobileTop"
              :class="{'vertical': verticalClass}">
            <a class="item cell ui darkblue"
               :href="aboutme.linkedin"
               target="_blank">
              <div class="title word-white">
                <i class="icon fa fa-lg fa-linkedin"></i>
              </div>
            </a>
            <a class="item cell ui darkblue" 
               :href="aboutme.github"
               target="_blank">
              <div class="title word-white">
                <i class="icon fa fa-lg fa-github"></i>
              </div>
            </a>
            <a class="item cell ui darkblue"
               :href="aboutme.facebook"
               target="_blank">
              <div class="title word-white">
                <i class="icon fa fa-lg fa-facebook"></i>
              </div>
            </a>
          </div>
        </transition>
      </div>
      <a class="hamburger ui darkblue horizontal-center" v-bind:class="{active: menuIsActive}" v-on:click="menuIsActive = !menuIsActive">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </a>
      <!-- <Screenshot :shottype="'pdf'"></Screenshot> -->
      <nav class="Nav" v-bind:class="{active: menuIsActive}" v-on:click="menuIsActive = !menuIsActive">
        <div class="ui darkblue menu">
          <div class="rows justify">
            <a class="item" href="#aboutme">ABOUT</a>
            <a class="item" href="#awards">AWARDS</a>
            <a class="item" href="#skills">SKILLS</a>
            <a class="item" href="#experience">EXPERIENCE</a>
            <a class="item" href="#sideproj">SIDEPROJ</a>
            <a class="item" href="#education">EDUCATION</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import Screenshot from './screenshot';

export default {
  props: ['aboutme'],
  data: function() {
    return {
      mobileTop: true,
      verticalClass: false,
      menuIsActive: false
    };
  },
  components: {
    Screenshot
  },
  methods: {
    handleScroll() {
      const doc = document.documentElement;
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      console.log(this.mobileTop);
      if (screen.width <= 768) {
        this.mobileTop = top <= 30;
      } else if (screen.width > 768) {
        this.verticalClass = top > 200;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style>
.fixed-social-icons.list {
  z-index: 20;
  font-size: 1rem;
  display: flex;
  line-height: 1.4rem;
  vertical-align: middle;
  position: fixed;
  right: 3rem;
  top: 2rem;
  transition: top .5s ,right .3s;
}

.fixed-social-icons.list.vertical {
  flex-direction: column;
  right: 0.7rem;
  top: 1rem;
}

.fixed-social-icons .cell {
  margin: 0 0.4em;
  text-align: center;
  border-radius: 1rem;
  width: 2rem;
  height: 2rem;
}

.fixed-social-icons.vertical .cell {
  margin: 0.4em 0;
}

.fa-facebook {
  vertical-align: -30%;
}

.fa-github {
  vertical-align: -30%;
}

.Nav {
  margin-top: 30px;
}

.pop-out {
  animation: pop-out 0.5s;
}
@keyframes pop-out {
  0% {
    transform: scale(0);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.right-out {
  animation: right-out 0.5s;
}
@keyframes right-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(7rem);
    opacity: 0.7;
  }
  100% {
    transform: translateX(10rem);
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  .fixed-social-icons.list {
    right: 4rem;
    top: 0.6rem;
    transition: 0.5s;
    -webkit-transition: 0.5s;
  }

  .Nav {
    visibility: hidden;
    position: fixed;
    top: 1em;
    right: 1em;
    margin: 0;
    z-index: 20;
    transition: 0.5s;
    -webkit-transition: 0.5s;
    opacity: 0;
  }
  .Nav.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>

