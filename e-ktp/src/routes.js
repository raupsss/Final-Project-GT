import AuthPage from "@/pages/AuthPage.vue"
import HomePage from "@/pages/HomePage.vue"

export default [
    {
        path: "/",
        name: "auth",
        component: AuthPage
    },
    {
        path: "/home",
        name: "home",
        component: HomePage
    }
]