<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<style lang="scss">
  @import './sass/main.sass'
</style>
<script>
  import Header from "./components/Header";
  export  default {
    name: 'app',
    data(){
      return{
      }
    },
    components:{
      Header
    }
  }
</script>