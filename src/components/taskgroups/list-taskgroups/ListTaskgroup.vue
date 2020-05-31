<template>
    <div>
        <h1>List Taskgroup</h1>
        <button @click="createTaskgroup()">New Taskgroup</button>
        <ul>
            <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
                <router-link
                    :to="{ name: 'showTaskgroup', params: { id: taskgroup.id } }">{{taskgroup.name}}</router-link>
            </li>
        </ul>
        <p><button @click="doLogout()">Logout</button></p>
    </div>
</template>

<script>
import { getTaskgroupsApi } from "./../../../services/api";
import { deleteTaskgroupApi } from "./../../../services/api";

export default {
    data() {
        return {
            taskgroups: []
        };
    },
    mounted: function () {
        getTaskgroupsApi().then(
            result => (this.taskgroups = result.data.data), 
            error => console.log(error.response.data.error_message)
        );
    },
    methods: {
        doLogout() {
            localStorage.removeItem('token')
            this.$router.push({ name: 'login' })
        },
        createTaskgroup() {
            this.$router.push({ name: 'createTaskgroup' })
        },
        deleteTaskgroup(id) {
            deleteTaskgroupApi(id).then(
                result => {console.log(result.data.data),
                this.$router.go()
                },
                error => console.log(error.response.data.error_message)
            )
        }
    }
};
</script>
