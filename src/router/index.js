import vue from "vue"
import VueRouter from "vue-router"

import Form from '../components/Form.vue'
import Users from '../components/Users.vue'

vue.use(VueRouter)

export const router = new VueRouter({
    node: "history",
    routes: [
        {path: "/", redirect: "/form"},
        {path: "/form", component: Form},
        {path: "/users", component: Users},
]
})
