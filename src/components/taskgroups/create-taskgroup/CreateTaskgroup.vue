// src/components/taskgroups/create-taskgroup/CreateTaskgroup.vue
<template>
    <div>
        <h1>Create Taskgroup</h1>
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" autofocus="autofocus" required>
        </div>
        <div>
            <label for="name">Description:</label>
            <input type="text" v-model="description" required>
        </div>
        <div>
            <label for="name">Frequence Type:</label>
            <input type="text" v-model="frequence_type" required>
        </div>
        <p><button @click="createTaskgroup(name, description, frequence_type)">Create</button></p>
    </div>
</template>

<script>
import { createTaskgroupApi } from "./../../../services/api";

export default {
    data() {
        return {
            name: "",
            description: "",
            frequence_type: "",
        };
    },
    methods: {
        createTaskgroup(name, description, frequence_type) {
            createTaskgroupApi(name, description, frequence_type).then(
                result => {
                    this.$router.push({name: "listTaskgroup"});
                },
                error => console.log(error.response.data.error_message)
            );
        }
    }
}
</script>
