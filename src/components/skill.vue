<template>
  <div class="segment hasRibbon">
    <a class="ui darkblue ribbon header" id="skills">SKILLS</a>
    <div class="segment-wrapper">
      <div class="rows justify">
        <div class="cell horizontal-center four textContent" v-for="skill in skills" :key="skill">
          <div class="circle-percentage" v-bind:class="{little : !skill.isBase}">
            <div class="bgcircle" v-if="skill.count<180" v-bind:style="{backgroundImage: 'linear-gradient(' + (90 + skill.count) + 'deg, transparent 50%, #d6d6d6 50%),linear-gradient(-90deg, ' + circlePercentageColor + ' 50%, transparent 50%)'}">
              <div class="circle">
                <div class="percentage word-darkblue">{{skill.percentage}}%</div>
              </div>
            </div>
            <div class="bgcircle" v-else v-bind:style="{backgroundImage: 'linear-gradient(' + (skill.count-90) + 'deg, transparent 50%, '+circlePercentageColor+' 50%),linear-gradient(-90deg, ' + circlePercentageColor + ' 50%, transparent 50%)'}">
              <div class="circle">
                <div class="percentage word-darkblue">{{skill.percentage}}%</div>
              </div>
            </div>
          </div>
          <div class="textContent word-darkblue">{{skill.name}}</div>
        </div>
        <!-- new -->
        <!-- <div class="cell horizontal-center two textContent" v-for="skill in skills" :key="skill"> -->
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      circlePercentageColor: '#31b0d5'
    };
  },
  props: ['skills'],
  mounted: function() {
    const skills = this.skills;
    skills.forEach(this.runPercentage);
  },
  methods: {
    runPercentage: function(skill) {
      const percentage = (skill.percentage / 100) * 360,
        clock = setInterval(function() {
          let counter = skill.count;
          if (percentage > counter)
            skill.count + 5 > percentage
              ? (skill.count += percentage - skill.count)
              : (skill.count += 5);
          else clearInterval(clock);
        }, 10);
    }
  }
};
</script>
<style>
/*** circle-progress-bar ***/

.circle-percentage {
  width: 7em;
  height: 7em;
  position: relative;
  background-color: #fff;
  display: inline-block;
}

.circle-percentage .bgcircle {
  position: relative;
  text-align: center;
  width: 7em;
  height: 7em;
  border-radius: 100%;
  background-color: rgb(214, 214, 214);
}

.circle-percentage .circle {
  position: relative;
  top: 0.25em;
  left: 0.25em;
  text-align: center;
  width: 6.5em;
  height: 6.5em;
  border-radius: 100%;
  background-color: rgb(255, 255, 255);
}

.circle-percentage .percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
  display: inline;
  font-size: 1.2em;
  font-weight: 600;
  z-index: 4;
}

.circle-percentage.little {
  width: 5em;
  height: 5em;
}

.circle-percentage.little .bgcircle {
  width: 5em;
  height: 5em;
}

.circle-percentage.little .circle {
  width: 4.5em;
  height: 4.5em;
}
</style>
