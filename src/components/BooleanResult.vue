<template>
  <div class="main">
    <div v-if="showYesAsAnswer"
         class="yes-container">
      <confetti-explosion
          v-if="showConfetti"
          :particleCount="100"
          :force="1"/>
      <div
          class="yes"
      >
        It's a YES!
      </div>
    </div>
    <div
        v-if="showNoAsAnswer"
        class="no"
    >
      NOOOOO
    </div>
  </div>
</template>

<script>

import ConfettiExplosion from "vue-confetti-explosion";
import {nextTick} from "@vue/runtime-core";



export default {
  name: 'BooleanResult',
  components: {
    ConfettiExplosion,
  },
  data(){
    return {
      showConfetti: false,
      booleanDecision: null,
      noSound: 'http://peal.io/download/sivdb',
      yesSound: 'http://peal.io/download/fc92e',
    }
  },
  async created() {
    this.booleanDecision = !!this.randomInteger(0,1);
    // debugger; // eslint-disable-line no-debugger
    if(this.booleanDecision){
      const audio = new Audio(this.yesSound);
      await audio.play();
      this.showConfetti = false;
      await nextTick();
      this.showConfetti = true;
    } else { /** it's a no*/
    const audio = new Audio(this.noSound);
      await audio.play();
    }
  },
  methods:{
    randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  computed:{
    showNoAsAnswer(){
      return this.booleanDecision === false;
    },
    showYesAsAnswer(){
      // this.$confetti.start(); // todo ruti decide which confettu to use
      return this.booleanDecision;
    }
  }
}
</script>

<style lang="scss">
.yes-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #42b983;
  .yes{
    font-size: 130px;
    //transition: opacity 10s ;
    background-color: white;
    position: absolute;
    width: 100%;
    z-index: 10;
    top: 40vh
  }
}

.no{
  font-size: 130px;
  //transition: opacity 10s ;
  background-color: white;
  position: absolute;
  z-index: 10;
  top: 40vh;
  width: 100%;
}
</style>
