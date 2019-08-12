
import vuex from 'vuex'

import Vue from 'vue'

import  createPersistedState  from 'vuex-persistedstate'

Vue.use(vuex)

const state ={
    userinfo:null,
    bookurl:'',
    nowChart:null
}

const mutations ={
    'CHANGEUSERINFO'(state,upload){
        state.userinfo = upload
    },
    'CHANGEBOOKURL'(state,upload){
        state.bookurl = upload
    },
    'CHANGECHART'(state,upload){
      state.nowChart = upload
    }
}

const store = new vuex.Store({
    state,
    mutations,
    plugins: [
        createPersistedState({
          storage: {
            getItem: key => localStorage.getItem(key),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
            localStorage.setItem(key, value),
            removeItem: key => localStorage.removeItem(key),
          },
        }),
      ]

})

export default store













