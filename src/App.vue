<template>
  <div id="app">
    <Siderbar></Siderbar>
    <Main></Main>
  </div>
</template>

<script>
import Siderbar from './components/Siderbar'
import Main from './components/Main'

export default {
  components: {
    Siderbar,
    Main
  }
}
</script>

<style>
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
