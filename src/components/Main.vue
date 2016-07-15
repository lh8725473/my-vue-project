<template>
  <div class="main">
    <router-view transition="slide"></router-view>
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
      msg: 'main'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>



.main {
	position: absolute;
	left: 200px;
	top: 0;
	right: 0;
	bottom: 0px;
}

/*.slide-transition {
  transition: transform 20s ease;
}

.slide-enter {
  transform: translate3d(-100%, 0, 0);
}

.slide-leave {
  transform: translate3d(100%, 0, 0);
}*/
</style>
