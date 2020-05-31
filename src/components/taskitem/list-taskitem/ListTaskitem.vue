// src/components/taskitem/list-taskitem/ListTaskitem.vue
<template>
  <div>
      <h1>List Taskitem</h1>
      <label for="taskItemsOverview">{{taskItemsOverview}}</label>
      <ul>
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
              <br />
          </li>
      </ul>
  </div>
</template>

<script>
import { updateTaskitemApi } from "../../../services/api";

export default {
  methods: {
    formatTaskitem(taskitem) {
      return {
        id: taskitem.id,
        checked: taskitem.checked,
        name: taskitem.task.name,
        description: taskitem.task.description
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
    //   taskitem.checked = !taskitem.checked;
      updateTaskitemApi(mutableTaskitem).then(response => {
        console.log(response.data.data);
      });
    }
  },
  computed: {
      taskitems () {
          return this.$store.state.taskitems;
      },
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
