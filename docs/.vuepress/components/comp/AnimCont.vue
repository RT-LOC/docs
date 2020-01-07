<template>
  <div>
      <Anim :options="defaultOptions" v-on:animCreated="handleAnimation"/>
  </div>
</template>

<script>
  import Anim from './Anim.vue';
  import * as animationData from '../anims/cmds.json';
  console.log(animationData)
 
  export default {
    props: {
      animationData
    },
    components: {
      'Anim': Anim
    },
    data() {
      return {
        defaultOptions: {animationData: animationData.default},
        animationSpeed: 1
      }
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
 
    },
  }
</script>