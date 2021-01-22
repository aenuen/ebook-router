<template>
  <div>
    View B
  </div>
</template>

<script>
export default {
  name: "index",
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {// 渲染后运行
    console.log("mounted")
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {// 渲染时运行
    console.log("mounted")
  },
  beforeDestroy() {
    console.log("beforeDestroy")
  },
  beforeRouterEnter(to, from, next) {
    console.log("beforeRouterEnter", to, from)
    next()
  },
  beforeRouterUpdate(to, from, next) {
    console.log("beforeRouterUpdate", to, from)
    next()
  },
  beforeRouterLeave(to, from, next) {
    console.log("beforeRouterLevel", to, from)
    next()
  },
}
</script>

<style scoped>

</style>