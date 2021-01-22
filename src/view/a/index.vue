<template>
  <div>
    <div>View A</div>
    <div>
      <button @click="addRouters">添加B路由</button>
      <router-link to="/b">查看B组件</router-link>
    </div>
  </div>
</template>

<script>

import B from "@/view/b"

export default {
  name: "index",
  methods: {
    addRouters() {
      this.$router.addRoutes([{path: "/B", component: B},])
    }
  },
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