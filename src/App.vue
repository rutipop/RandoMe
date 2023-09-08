<template>
  <div class="main">
    <img class="logo" :src="icon">
    <div class="title" v-text="title"/>
    <boolean-result v-if="showBooleanAns"/>
    <options-container v-if="showOptions"
                       class="options"
                       v-click-away="closeOptions"
    />
    <div class="buttons">
      <div class="btn"
           v-text="buttonsOptions.boolean.text"
           @click="handleBooleanBtn"
      />
      <div class="btn"
           v-text="buttonsOptions.options.text"
           @click="handleOptionsBtn"

      />
    </div>
  </div>
</template>

<script>
// import PinkComputer from  './assets/PinkComputer.png'
import randome1 from  './assets/randome1.jpg'
// import randome2 from  './assets/randome2.gif'
// import randome3 from  './assets/randome3.mp4'
import BooleanResult from './components/BooleanResult'
import OptionsContainer from "./components/OptionsContainer";

export default {
  name: 'App',
  components: {
    OptionsContainer,
    BooleanResult,
  },
  data(){
    return {
      icon: randome1,
      title: 'Stuck with a decision? Let me help you',
      buttonsOptions: {
        boolean: {
          text: 'Yes or No?'
        },
        options: {
          text: 'a few options?'
        }
      },
      showBooleanAns: false,
      showOptions: false,
    }
  },
  methods:{
    randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    async handleBooleanBtn(){
      // debugger; // eslint-disable-line no-debugger
      this.showBooleanAns = true;
      setTimeout(()=> {
        this.showBooleanAns = false;
      },2300);
    },
    async handleOptionsBtn(){
      this.showOptions = true;
    },
    closeOptions(){
      this.showOptions = false;
    }
  },
  computed:{
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Courier New", Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b2b2b;
  //background-color: #ff5757;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.main{
  font-size: 16px;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo{
  width: 300px;
}
.title{
  padding: 24px 0;
  font-size: 24px;
}
.buttons{
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  .btn{
    border: 1px solid #2b2b2b;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
  }

  .btn:hover{
    color:deeppink;
  }
}
.options{
  position: absolute;
  top: 40%
}
</style>
