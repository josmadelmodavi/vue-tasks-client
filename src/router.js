// ./src/router.js
import VueRouter from 'vue-router';

import { routes } from './routes';

const router = new VueRouter({ routes, mode: "history" });

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("token")) {
            next();
            return;
        } else {
            next("/login");
        }        
    } else {
        next();
    }
});

export default router;
