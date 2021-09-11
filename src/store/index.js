import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    blogMesage: null,
    wordLength: null,
  },
  mutations: {
    SET_BLOG(state, msg) {
      if (msg) {
        state.blogMesage = msg;
      }
    },
    SET_WORDS(state, len) {
      if (len) {
        state.wordLength = len;
      }
    },
  },
  actions: {
    
  },
  getters: {
    message: (state) => state.blogMesage,
    words: (state) => state.wordLength,
  },
  modules:{

  }
})
