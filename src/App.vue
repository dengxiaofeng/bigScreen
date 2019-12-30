<template>
  <div id="app">
    <Home />
  </div>
</template>

<script type="text/ecmascript-6">
import Home from './views/Home'
export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style type="text/stylus" lang="stylus">
#app
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
</style>
