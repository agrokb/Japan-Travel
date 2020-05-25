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
    console.log(process.env.APIPATH,process.env.CUSTOMAPATH);
    this.$http.get(api).then((response) => {
    console.log(response.data)
})

  }
}
</script>

<style lang="scss">
@import "./assets/all.scss";

</style>
