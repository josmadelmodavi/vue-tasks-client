<template>
<div>
  <h1>List Taskgroup</h1>
  <ul>
      <li v-for="taskgroup in taskgroups" :key="taskgroup.id">
          <router-link
            :to="{ name: 'showTaskgroup', params: { id: taskgroup.id } }">{{taskgroup.name}}</router-link>
      </li>
  </ul>
</div>
</template>

<script>
import { getTaskgroupsApi } from "./../../../services/api";

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
    }
};
</script>
