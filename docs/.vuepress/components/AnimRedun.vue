<template>
  <Anim :options="defaultOptions"/>
</template>

<script>
  import Anim from './comp/Anim.vue';
  import * as animationData from './anims/redund.json';
 
  export default {
    components: {
      Anim
    },
    data() {
      return {
        defaultOptions: {animationData: animationData.default}
      }
    },
    // methods: {
    //   handleAnimation: function (anim) {
    //     this.anim = anim;
    //   },
 
    // },
  }
</script>