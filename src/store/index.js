import { createStore } from 'vuex'

export default createStore({
  state: {
    backRecord:'/aaaaa',
    sessionId:0
  },
  mutations: {
    turnBR(state,from){
      state.backRecord=from;
    },
    turnSD(state,id){
      state.sessionId=id;
    },
  },
  actions: {
  },
  modules: {
  }
})
