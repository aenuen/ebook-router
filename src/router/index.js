import Vue from "vue"
import route from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import A from "@/view/a"

Vue.use(route)

const routes = [
    {path: "/hello-world", component: HelloWorld, meta: {title: "HelloWorld"}},
    {path: "/a", component: A, meta: {title: "A"}},
]

const router = new route({
    routes
})

// 别一种实现修改每页 title 的方法
// Vue.mixin({
//     beforeCreate() {
//         const toTitle = this.$route.meta.title
//         const title = toTitle ? toTitle : "title"
//         document.title = title
//     }
// })

router.beforeEach((to, from, next) => {
    // 修改每页 title
    const toTitle = to.meta.title
    const title = toTitle ? toTitle : "title"
    document.title = title
    console.log("beforeEach", to, from)
    next()
})

router.beforeResolve((to, from, next) => {
    console.log("beforeResolve", to, from)
    next()
})

router.afterEach((to, from) => {
    console.log("beforeResolve", to, from)
})


export default router