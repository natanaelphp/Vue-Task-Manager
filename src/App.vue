<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #app {
      margin: 4% 4%;
    }
    
    @media (min-width: 500px) {
      #app {
        margin: 5% 15%;
      }
    }
</style>
