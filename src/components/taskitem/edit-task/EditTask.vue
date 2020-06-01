// src/components/taskitem/edit-task/EditTask.vue
<template>
    <div>
        <h1>Edit task name - id: {{ idtask }}</h1>
        <div>
            <label>name:</label>
            <input type="text" v-model="name" autofocus="autofocus" />
        </div>
        <div>
            <label>description:</label>
            <input type="text" v-model="description" />
        </div>
        <button @click="updateTask(name, description)">Edit Task</button>
    </div>
</template>

<script>
import { updateTaskApi } from './../../../services/api';

export default {
    props: ['idtask'],
    data() {
        return {
            name: "",
            description: ""
        }
    },
    methods: {
        updateTask(name, description) {
        const { idtask } = this
        updateTaskApi(idtask, name, description).then(
            result => this.$router.push({ name: 'showTaskgroup'}),
            error => console.error(error.response.data.error_message)
            )
        }
    }
}
</script>
