<template>
  <Anim :options="defaultOptions"/>
</template>

<script>
  import Anim from './comp/Anim.vue';
  import * as animationData from './anims/cmds.json';
 
  export default {
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