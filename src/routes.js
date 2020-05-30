// ./src/routes.js
import Login from './components/login/Login.vue'
import ListTaskgroup from './components/taskgroups/list-taskgroups/ListTaskgroup.vue'

export const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'listTaskgroup',
        path: '/taskgroup/list',
        component: ListTaskgroup,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "*",
        component: Login
    }
];
