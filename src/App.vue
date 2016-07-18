<template>
  <div id="app">
    <!-- <Siderbar></Siderbar> -->
    <Main></Main>
  </div>
</template>

<script>
import Main from './components/Main'
import store from './vuex/store'

export default {
  components: {
    Main
  },
  store
}
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

</style>
