// src/components/taskgroups/show-taskgroup/ShowTaskgroup.vue
<template>
  <div>
      <h1>Show Taskgroup - id: {{id}}</h1>
      <label for="id">ID: {{taskgroup.id}}</label>
      <br />
      
      <label for="name">Name: {{taskgroup.name}}</label>
      <br />
      
      <label for="description">Description: {{taskgroup.description}}</label>
      <br />

      <label for="frequency_type">Frequence Type: {{taskgroup.frequence_type}}</label>
      <br />

      <label for="taskItemsOverview">{{taskItemsOverview}}</label>
      <br />

      <ul>
          <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">{{taskitem}}</li>
      </ul>
  </div>
</template>

<script>
import { getTaskgroupApi } from "./../../../services/api";
export default {
    props: ["id"],
    data() {
        return {
            taskgroup: {}
        };
    },
    mounted: function () {
        getTaskgroupApi(this.id).then(response => {
            this.taskgroup = response.data.data;
        });        
    },
    methods: {
        formatTaskitem(taskitem) {
            return {
                checked: taskitem.checked,
                name: taskitem.task.name,
                description: taskitem.task.description
            };
        },
        isTaskitemChecked(taskitem) {
            return !!taskitem.checked;
        }
    },
    computed: {
        formattedTaskitems: function () {
            if (!this.taskgroup.task_in_lists) {
                return [];
            }

            const { task_in_lists: taskItems } = this.taskgroup;

            return taskItems.map(this.formatTaskitem);
        },
        taskItemsOverview: function () {
            const { formattedTaskitems, isTaskitemChecked } = this;
            const totalCount = formattedTaskitems.length;
            const checkedCount = formattedTaskitems.filter(isTaskitemChecked).length;

            return `${checkedCount} of ${totalCount} task items are checked`
        }
    }
};
</script>
