<template>
  <div>
    ANIMCMDS
      <!-- <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
      <div>
          <p>Speed: x{{animationSpeed}}</p>
          <input type="range" value="1" min="0" max="3" step="0.5"
                  v-on:change="onSpeedChange" v-model="animationSpeed">
      </div>
      <button v-on:click="stop">stop</button>
      <button v-on:click="pause">pause</button>
      <button v-on:click="play">play</button> -->
  </div>
</template>

<script>
  import Lottie from './lottie.vue';
  import * as animationData from './anims/cmds.json';
 
  export default {
    name: 'app',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {animationData: animationData},
        animationSpeed: 1
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
 
      stop: function () {
        this.anim.stop();
      },
 
      play: function () {
        this.anim.play();
      },
 
      pause: function () {
        this.anim.pause();
      },
 
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
  }
</script>