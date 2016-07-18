<template>
  
    <router-view transition="slide"></router-view>
    <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="外卖" v-link="'/test'">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单" v-link="'/hello'">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现" v-link="'/test'">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的" v-link="'/hello'">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  },
  watch: {
    '$route': function(a, b){
      console.log(a)
      console.log(b)
    }
  }
} 
</script>

<style lang="scss">
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-tabbar-container {
    overflow: auto;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
