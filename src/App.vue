<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'HomePage',
  components:  {
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    };
  },
  computed:{
    
  },
  async created() {
  },
  methods: {
  }
};
</script>
