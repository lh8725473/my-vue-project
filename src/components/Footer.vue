<template>
  <mt-tabbar :selected.sync="selected">
    <mt-tab-item id="外卖">
      <img slot="icon" src="../assets/logo.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" src="../assets/logo.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" src="../assets/logo.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'TEST World!'
    }
  },
  ready() {
    // GET /someUrl
    this.$http.get('http://wap.cellmyth.cn/mall/member/info').then((response) => {
      // success callback
      console.log(response)
    }, (response) => {
      console.log(response)
      // error callback
    });
  },
  components: {
    Tabbar,
    TabItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
