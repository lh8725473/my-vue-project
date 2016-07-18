<template>
  <div class="hello">
    <h1 class="animated fadeInDown">Example</h1>
    <img src="../assets/logo.png">
    <h1>{{ msg }}
    <button class="btn btn-default btn-lg"
    @click="showRight = !showRight">
    Click to toggle alert on right
    </button>
    <button class="btn btn-default btn-lg"
    @click="goRouter()">
    Click to goRouter
    </button>
    <alert
      :show.sync="showRight"
      :duration="3000"
      type="success"
      width="400px"
      placement="top-right"
      dismissable
    >
    <span class="icon-ok-circled alert-icon-float-left"></span>
    <strong>Well Done!</strong>
    <p>{{ alertMessage }}</p>
  </alert>
  </div>
</template>

<script>
import router from '../router'
import { alert } from 'vue-strap'
import { getAlertMessage } from '../vuex/store'
import { changeAlertMessage } from '../vuex/actions'

export default {
  vuex: {
    getters: {
      alertMessage: getAlertMessage
    },
    actions: {
      changeAlertMessage: changeAlertMessage
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      showRight: false
    }
  },
  methods: {
    changeShow () {
      console.log("changeShow")
      this.showRight = !this.showRight
    },
    goRouter () {
      console.log('goRouter')
      router.go("/test")
    }
  },
  components: {
    alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>
