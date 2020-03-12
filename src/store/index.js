import Vue from 'vue';
import Vuex from 'vuex';
import { GET_USERS} from "./mutationTypes.js";
import { Data } from "../shared/data";

Vue.use(Vuex);

const state = {
    users:[],
};

const mutations = {
    [GET_USERS](state, users){
      state.users = users;
    }
};

const actions = {
  async getUsersAction({commit},page){
    const users = await Data.getUsers(page);
    commit(GET_USERS,users);
  }
};

const modules = {
};

const getters = {
  getUserById: (state) => (id) => {
    //return state.users.find(user => user.id.value == id)
    var userFound = null;
    state.users.forEach(function(user){
        if(user.id.value == id){
           userFound=user;
        }
    });
    return userFound;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
