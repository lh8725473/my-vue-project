import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  Alert: {
    message: 'first message',
    show: true
  }
}

const mutations = {
  ['SHOW_ALERT'] (state, msg) {
    state.Alert.message = msg
    state.Alert.show = true
  },
  ['CHANGE_ALERT_MESSAGE'] (state, msg) {
    state.Alert.message = msg
  }
}

export function getAlertMessage (state) {
  return state.Alert.message
}

export default new Vuex.Store({
  state,
  mutations,
  strict: true
})
