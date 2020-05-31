// ./src/routes.js
import Login from './components/login/Login.vue';
import ListTaskgroup from './components/taskgroups/list-taskgroups/ListTaskgroup.vue';
import ShowTaskgroup from './components/taskgroups/show-taskgroup/ShowTaskgroup.vue';
import CreateTaskgroup from './components/taskgroups/create-taskgroup/CreateTaskgroup.vue';
import CreateTaskitem from './components/taskitem/create-taskitem/CreateTaskitem.vue';
import DeleteTaskgroup from './components/taskgroups/delete-taskgroup/DeleteTaskgroup.vue';

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
        name: 'showTaskgroup',
        path: '/taskgroup/show/:id',
        component: ShowTaskgroup,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'createTaskgroup',
        path: '/taskgroup/create',
        component: CreateTaskgroup,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'deleteTaskgroup',
        path: '/taskgroup/delete/:id',
        component: DeleteTaskgroup,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'createTaskitem',
        path: '/taskitem/create',
        component: CreateTaskitem,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "*",
        component: Login
    }
];
