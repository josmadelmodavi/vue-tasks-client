<template>
    <div>
        <h1>List Taskgroup</h1>
        <button @click="createTaskgroup()">New Taskgroup</button>
        <p><table border="1px" width="400px">
            <th>name taskgroup</th>
            <th>action</th>
            <tr v-for="taskgroup in taskgroups" :key="taskgroup.id" align="center">
                <td><router-link
                    :to="{ name: 'showTaskgroup', params: { id: taskgroup.id } }">{{ taskgroup.name }}</router-link></td>
                <td><button @click="deleteTaskgroup(taskgroup.id)">Delete</button></td>
            </tr>
        </table></p>
        <!-- <ul>
            <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
                <router-link
                    :to="{ name: 'showTaskgroup', params: { id: taskgroup.id } }">{{ taskgroup.name }}</router-link>
                <button @click="deleteTaskgroup(taskgroup.id)">Delete</button>
            </li>
        </ul> -->
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
                result => {
                    console.log('result.data.data'),
                    this.$router.go()
                },
                error => console.log(error.response.data.error_message)
            )
        }
    }
};
</script>
