<template>
  <v-data-table :headers="columns" :items="items" hide-default-footer @click:row="onClick"
      :mobile-breakpoint="1" :items-per-page="-1">
    <!-- <template slot="headerCell" slot-scope="{ header }">
      <span v-text="header.text" />
    </template> -->
    <template v-slot:item.type="props">
      <span style="font-weight: bold">{{ props.item.type | capitalize }}</span>
    </template>
    
    <template v-slot:item.cnt="props">
      {{$_.get($store.state.data.live.stats.packets[props.item.type], 'cnt')}}
    </template>
    <template v-slot:item.last="props">
      {{$_.get($store.state.data.live.stats.packets[props.item.type], 'last')}}
    </template>

    
    <template v-slot:item.topic="props">
      <i>{{ props.item.topic }}</i>
    </template>
  </v-data-table>
</template>
<script>
const { dataParams_arr } = require("@shared/js/config/data/dataParams")

console.log('DATAPARAMS')
console.log(dataParams_arr)

export default {
  data() {
    return {
      columns: [
        {
          // sortable: false,
          text: "Type",
          store: false,
          value: "type"
        },
        {
          // sortable: false,
          text: "Count",
          store: true,
          value: "cnt"
        },
        {
          // sortable: false,
          text: "Last received",
          store: true,
          value: "last"
        },
        {
          // sortable: false,
          text: "Description",
          store: false,
          value: "descr"
        },
        {
          // sortable: false,
          text: "Topic",
          store: false,
          value: "topic"
        },
      ],
      // items: dataParams_arr
      items: dataParams_arr.filter(o => !o.type.includes('-buf') )
      // && !o.type.includes('-int')
      // items: [
      //   {
      //     type: "TAGS",
      //     value: "tags",
      //     descr: "All tags (also inactive)"
      //   },
      //   {
      //     type: "ANCHORS",
      //     value: "anchors",
      //     descr: "All anchors (also inactive)"
      //   },
      //   {
      //     type: "LOCATION",
      //     value: "loc",
      //     descr: "Tag location data: position, distances"
      //   },
      //   {
      //     type: "STATUS",
      //     value: "status",
      //     descr: "Tag status"
      //   },
      //   {
      //     type: "IMPULSE",
      //     value: "impulse",
      //     descr: "Impulse packet, e.g. start signal"
      //   },
      //   {
      //     type: "RACE",
      //     value: "race",
      //     descr: "Race status"
      //   },
      //   {
      //     type: "EVENT",
      //     value: "event",
      //     descr: "E.g. entering / emptying a zone"
      //   },
      //   {
      //     type: "ZONES",
      //     value: "zones",
      //     descr: "Tags per zone"
      //     // topic: ''
      //   },
      //   // {
      //   //   type: "DIST",
      //   //   value: "dists",
      //   //   descr: "Distance information"
      //   // }
      // ]
    };
  },
  methods: {
    onClick(item) {
      // console.log(item)
      this.$emit('selected', item.type)
    }
  },
  created() {
    // console.log(Object.values(dataParams))
    // console.log(dataParams_arr)
  }
};
</script>
