// ./src/store/store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        taskgroup: {},
        taskitems: []
    },
    mutations: {
        taskgroup(state, taskgroup) {
            state.taskgroup = taskgroup;
            state.taskitems = taskgroup.task_in_lists;
        }
    }
});

export default store;
