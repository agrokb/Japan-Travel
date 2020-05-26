<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    const api= `${process.env.APIPATH}/api/${process.env.CUSTOMAPATH}/products`;
    this.$http.get(api).then((response) => {
})

  }
}
</script>

<style lang="scss">
@import "./assets/all.scss";

</style>
