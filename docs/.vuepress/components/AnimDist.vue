<template>
  <Anim :options="defaultOptions" style="max-width: 80%" />
</template>

<script>
  import Anim from './comp/Anim.vue';
  import * as animationData from './anims/distancing.json';
 
  export default {
    components: {
      Anim
    },
    data() {
      return {
        defaultOptions: {animationData: animationData.default},
      }
    },
  }
</script>