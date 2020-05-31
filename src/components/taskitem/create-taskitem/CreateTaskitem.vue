// src/components/taskitem/create-taskitem/CreateTaskitem.vue
<template>
    <div>
        <h1>Create Taskitem in Taskgroup</h1>
        <!-- <div>
            <label for="name">Checked:</label>
            <input type="checkbox" v-model="checked">
        </div> -->
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" autofocus="autofocus">
        </div>
        <div>
            <label for="name">Description:</label>
            <input type="text" v-model="description">
        </div>
        <p><button @click="createTaskitem(name, description)">Create</button></p>
    </div>
</template>

<script>
import { createTaskitemApi } from "./../../../services/api";

export default {
    props: ["id"],
    data() {
        return {
            checked: "",
            name: "",
            description: ""
        };
    },
    methods: {
        createTaskitem(name, description) {
            createTaskitemApi(name, description).then(
                result => {
                    this.$router.push({name: "listTaskgroup"});
                },
                error => console.log(error.response.data.error_message)
            );
        },
    }
}
</script>
