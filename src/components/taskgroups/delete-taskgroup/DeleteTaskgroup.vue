// src/components/taskgroups/delete-taskgroup/DeleteTaskgroup.vue
<template>
  
</template>

<script>
import { deleteTaskgroupApi } from "../../../services/api";

export default {
    props: ["id"],
    methods: {
        deleteTaskgroup(id) {
            deleteTaskgroupApi(this.id).then(
                result => {
                    this.$router.push({name: "showTaskgroup"});
                },
                error => console.log(error.response.data.error_message)
            );
        }
    }
}
</script>
