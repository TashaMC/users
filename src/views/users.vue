<template>
<div>
    <v-simple-table fixed-header height="560px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
            </th>
            <th class="text-left">First</th>
            <th class="text-left">Last</th>
            <th class="text-left">E-mail</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Age</th>
            <th class="text-left">Gender</th>
            <th class="text-left">
              <v-btn @click="exportData()" small outlined color="primary">
                  <v-icon>fa-download</v-icon>
              </v-btn>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id.value">
                <td><v-img width="50px" height="50px" v-bind:src="user.picture.thumbnail"></v-img></td>
                <td width="200px" >{{ user.name.first }}</td>
                <td>{{ user.name.last }}</td>
                <td width="200px">{{ user.email }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.registered.age }}</td>
                <td>{{ user.gender }}</td>
                <td>
                    <router-link :to= "{ name: 'user', params:{ id: user.id.value }}">
                      <v-btn small color="primary">
                          view user
                      </v-btn>
                    </router-link>
                </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-pagination
        v-model="page"
        :length="6"
    ></v-pagination>
  </div>
</template>

<script>
// import  { Data } from '../shared';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'users',
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
      page:1,
      fields : ['name.first', 'name.last', 'email', 'phone', 'registered.age','gender'],
    };
  },
  watch: {
    page: async function (newPage) {
        await this.getUsersAction(newPage);
    }
  },
  computed:{
     ...mapState(["users"]),
    ...mapGetters([]),
  },
  async created() {
    await this.loadUsers(this.page);
  },
  methods: {
    ...mapActions(["getUsersAction"]),
    async loadUsers(page) {
      await this.getUsersAction(page);
    },
    exportData(){
        var csv = [];
        var row = [];
        row.push("First");
        row.push("Last");
        row.push("Email");
        row.push("Phone");
        row.push("Age");
        row.push("Gender");
        row.push("Link to Picture");
        csv.push(row.join(",")); 
        this.users.forEach(function(user){
            var row = []; 
                row.push(user.name.first);
                row.push(user.name.last);
                row.push(user.email);
                row.push(user.phone);
                row.push(user.registered.age);
                row.push(user.gender);
                row.push(user.picture.large);
            csv.push(row.join(","));      
        });
        this.downloadCSV(csv.join("\n"), "users.csv");
    },
    downloadCSV(csv, filename) {
      //https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/
          var csvFile;
          var downloadLink;

          // CSV file
          csvFile = new Blob([csv], {type: "text/csv"});

          // Download link
          downloadLink = document.createElement("a");

          // File name
          downloadLink.download = filename;

          // Create a link to the file
          downloadLink.href = window.URL.createObjectURL(csvFile);

          // Hide download link
          downloadLink.style.display = "none";

          // Add the link to DOM
          document.body.appendChild(downloadLink);

          // Click download link
          downloadLink.click();
      }
  }
};
</script>



