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

      <list-taskitem v-if="taskgroup.task_in_lists" v-bind:taskitems="taskgroup.task_in_lists"></list-taskitem>

      <!-- <ul>
          <li v-for="taskitem in taskgroup.task_in_lists" :key="taskitem.id">{{taskitem}}</li>
      </ul>
      
      <ul>
          <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">{{taskitem}}</li>
      </ul>

      <ul>
          <li v-for="taskitem in formattedTaskitems" :key="taskitem.id">
            <label for="id">id: {{taskitem.id}}</label>
            <br />
            <label for="checked">checked: {{taskitem.checked}}</label>
            <br />
            <label for="name">name: {{taskitem.name}}</label>
            <br />
            <label for="description">description: {{taskitem.description}}</label>
          </li>
      </ul> -->
  </div>
</template>

<script>
import { getTaskgroupApi } from "./../../../services/api";
import ListTaskitem from "./../../taskitem/list-taskitem/ListTaskitem.vue";

export default {
    props: ["id"],
    components: {
        "list-taskitem": ListTaskitem
    },
    data() {
        return {
            taskgroup: {}
        };
    },
    mounted: function () {
        getTaskgroupApi(this.id).then(response => {
            this.taskgroup = response.data.data;
        });
    }
};
</script>
