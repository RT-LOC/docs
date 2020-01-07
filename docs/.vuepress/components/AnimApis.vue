<template>
  <Anim :options="defaultOptions"/>
</template>

<script>
  import Anim from './comp/Anim.vue';
  import * as animationData from './anims/API2.json';
 
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