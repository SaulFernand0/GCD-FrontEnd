import{
    createRouter, createWebHistory 
}from "vue-router"

import Login from "@/components/Login.vue"
import Home from "@/components/Home.vue"
import List from "@/components/List.vue"
import Upload from "@/components/Upload.vue"
import Email from "@/components/Email.vue"

const routes = [
    {path: "/login", component: Login},
    {path: "/home", redirect:{
        name: "list",
    }, 
    children:[{path: "list", component: List, name:"list"}, {path: "upload", component: Upload, name:"upload"}, {path: "email", component: Email, name:"email"}], component: Home}
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router
