import {createRouter, createWebHistory} from 'vue-router'
import AuthView from "@/views/auth/AuthView.vue";
import {useAuthStore} from "@/stores/auth.js";
import DevsRoutes from "@/router/devs.routes.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/auth',
            name: 'auth',
            component: AuthView,
            meta: {requiresAuth: false}
        },
        {
            path: '/',
            redirect: {name: 'devs'},
        },
        ...DevsRoutes
    ]
})

// para se me ardh te ni route exec qet funksion
router.beforeEach((to, from) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        return {
            name: 'auth',
            // save the location we were at to come back later
            query: {redirect: to.fullPath},
        }
    } else if (!to.meta.requiresAuth && authStore.isLoggedIn) {
        return {
            name: 'home'
        }
    }
})

export default router
