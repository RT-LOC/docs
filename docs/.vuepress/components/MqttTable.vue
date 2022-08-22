<template>
  <packets-table :stats="false" />
</template>

<script>
import PacketsTable from "@shared-front/vue/components/rtls/PacketsTable";

export default {
  components: {
    PacketsTable
  }
}

</script>