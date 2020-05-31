// ./src/routes.js
import Login from './components/login/Login.vue';
import ListTaskgroup from './components/taskgroups/list-taskgroups/ListTaskgroup.vue';
import ShowTaskgroup from './components/taskgroups/show-taskgroup/ShowTaskgroup.vue';
import CreateTaskgroup from './components/taskgroups/create-taskgroup/CreateTaskgroup.vue';
import CreateTaskitem from './components/taskitem/create-taskitem/CreateTaskitem.vue';
import DeleteTaskgroup from './components/taskgroups/delete-taskgroup/DeleteTaskgroup.vue';
// import DeleteTaskitem from './components/taskitem/delete-taskitem/DeleteTaskitem.vue';
import EditTask from './components/taskitem/edit-task/EditTask.vue';

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
        path: '/taskgroup/show/:id/taskitem/create',
        component: CreateTaskitem,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    // {
    //     name: 'deleteTaskitem',
    //     path: '/taskgroup/show/:id/taskitem/:taskitem.id',
    //     component: DeleteTaskitem,
    //     props: true,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    {
        name: 'editTask',
        path: '/taskgroup/show/:id/task/edit/:idtask',
        component: EditTask,
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
