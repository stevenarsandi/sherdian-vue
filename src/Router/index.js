import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: "/login",
        name: "login",
        component: () => import('@/views/login/Main.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/Main.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Main.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/Main.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/Main.vue')
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('@/views/users/Main.vue')
    }
];

const router = createRouter ({
    history : createWebHistory(),
    routes
});
export default router; 