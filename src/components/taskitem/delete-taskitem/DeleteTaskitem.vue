<template>
  
</template>

<script>
import { deleteTaskitemApi } from "../../../services/api";

export default {
    props: ["id"],
    methods: {
        deleteTaskitem(id) {
            deleteTaskitemApi(this.id).then(
                result => {
                    this.$router.push({name: "showTaskgroup"});
                },
                error => console.log(error.response.data.error_message)
            );
        }
    }
}
</script>
