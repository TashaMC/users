<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="344"
            outlined
            >
            
            <v-img v-bind:src="user.picture.large"  ></v-img>
                    
            <v-list-item two-line >
                    <v-list-item-content>
                    <v-list-item-title>Name</v-list-item-title>
                    <v-list-item-subtitle>{{user.name.first}}&nbsp;{{user.name.last}}</v-list-item-subtitle>
                    </v-list-item-content>
            </v-list-item>
            
            <v-list-item two-line >
                    <v-list-item-content>
                    <v-list-item-title>E-mail</v-list-item-title>
                    <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                    </v-list-item-content>
            </v-list-item>

            <v-list-item two-line >
                    <v-list-item-content>
                    <v-list-item-title>Phone</v-list-item-title>
                    <v-list-item-subtitle>{{user.phone}}</v-list-item-subtitle>
                    </v-list-item-content>
            </v-list-item>

            <v-list-item two-line >
                    <v-list-item-content>
                    <v-list-item-title>Age</v-list-item-title>
                    <v-list-item-subtitle>{{user.registered.age}}</v-list-item-subtitle>
                    </v-list-item-content>
            </v-list-item>

            <v-list-item two-line >
                    <v-list-item-content>
                    <v-list-item-title>Gender</v-list-item-title>
                    <v-list-item-subtitle>{{user.gender}}</v-list-item-subtitle>
                    </v-list-item-content>
            </v-list-item>
        
            <v-card-actions>
                <router-link to="/users">
                    <v-btn text>return</v-btn>
                </router-link>
            </v-card-actions>
    </v-card>

    </div>
</template>

<script>
import {mapGetters } from 'vuex';

export default {
  name: 'user',
  components:  {
  },
  props: {
  },
  data() {
    return {
        user:{}
    };
  },
  computed:{
      ...mapGetters(['getUserById']),
  },
  created() {
      this.user = { ...this.getUserById(this.$route.params.id) };
  },
  methods: {
  }
};
</script>



