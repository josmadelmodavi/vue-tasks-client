// src/components/taskitem/list-taskitem/ListTaskitem.vue
<template>
    <div>
        <h1>List Taskitem</h1>
        <div>
            <button @click="createTaskitem()">New Taskitem</button>
        </div>
        <br />
        <label for="taskItemsOverview">{{taskItemsOverview}}</label>
        <p><table border="1px" width="400px">
            <th>checked</th>
            <th>name</th>
            <th>description</th>
            <th>actions</th>
            <tr v-for="taskitem in formattedTaskitems" :key="taskitem.id" align="center">
                <td><input type="checkbox" v-model="taskitem.checked" @click="updateTaskitem(taskitem)"></td>
                <td><label for="name">{{ taskitem.name }}</label></td>
                <td><label for="description">{{ taskitem.description }}</label></td>
                <td>
                    <button @click="editTask(taskitem.task_id)">Edit</button>
                    <button @click="deleteTask(taskitem.task_id)">Delete</button>
                </td>
            </tr>
        </table></p>
        <!-- <ul>
            <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
                <div>
                    <label for="checked">checked:</label>
                    <input type="checkbox" v-model="taskitem.checked" @click="updateTaskitem(taskitem)">
                </div>
                <div>
                    <label for="name">name: {{ taskitem.name }}</label>
                </div>
                <div>
                    <label for="description">description: {{ taskitem.description }}</label>
                </div>
                <div>
                    <button @click="editTask(taskitem.task_id)">Edit this Taskitem</button>
                    <button @click="deleteTask(taskitem.task_id)">Delete this Taskitem</button>
                </div>
                <br />
            </li>
        </ul> -->
    </div>
</template>

<script>
import { updateTaskitemApi } from "../../../services/api";
import { deleteTaskApi } from "../../../services/api";
import { mapState, mapMutations } from "vuex";

export default {
    methods: {
    ...mapMutations(["setTaskitem"]),
    formatTaskitem(taskitem) {
        return {
            id: taskitem.id,
            checked: taskitem.checked,
            name: taskitem.task.name,
            description: taskitem.task.description,
            task_id: taskitem.task.id
        };
    },
    isTaskitemChecked(taskitem) {
        return taskitem.checked;
    },
    updateTaskitem(taskitem) {
        const mutableTaskitem = {
            id: taskitem.id,
            checked: !taskitem.checked
        }
        // taskitem.checked = !taskitem.checked;
        updateTaskitemApi(mutableTaskitem).then(response => {
            this.setTaskitem(mutableTaskitem)
        });
    },
    createTaskitem() {
        this.$router.push({ name: 'createTaskitem' })
    },
    editTask(taskitem) {
        this.$router.push({ name: 'editTask', params: { idtask: taskitem }})
    },
    deleteTask(taskitem) {
        if (window.confirm("Do you want to delete this Taskitem?")) {
            deleteTaskApi(taskitem).then(
                response => this.$router.go(),
                error => console.error(error.response.data.error_message)
            )
        }
    }
  },
  computed: {
    ...mapState(["taskitems"]),
    formattedTaskitems: function() {
        return this.taskitems.map(this.formatTaskitem);

        if(!taskitems){
            return [];
        }
    },
    taskItemsOverview: function() {
        const { formattedTaskitems, isTaskitemChecked } = this;
        const totalCount = formattedTaskitems.length;
        const checkedCount = formattedTaskitems.filter(isTaskitemChecked).length;

        return `${checkedCount} of ${totalCount} task items are checked`;
    }
  }
};
</script>
