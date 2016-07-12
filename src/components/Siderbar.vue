<template>
  <div class="siderbar">
  	<div><a v-link="{ path: '/test', activeClass: 'custom-active-class' }" class="item"><span class="glyphicon glyphicon-search"></span></i>Home</a></div>
  	<div><a v-link="{ path: '/hello', activeClass: 'custom-active-class' }" class="item"><i class="icon smile"></i>{{ msg }}</a></div>
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
      msg: 'siderbar!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.siderbar {
	background: green;	
  position: absolute;
  width: 200px;
  top: 0;
  bottom: 0;
  left: 0;

  .custom-active-class{
  	color: red;
  }
}
</style>