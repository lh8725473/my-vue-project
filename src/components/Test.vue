<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
