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
        <br />
        <div>
            <button @click="listTaskgroups()">Go back view all Taskgroups</button>
        </div>
        <list-taskitem></list-taskitem>
    </div>
</template>

<script>
import { getTaskgroupApi } from "./../../../services/api";
import { deleteTaskgroupApi } from "./../../../services/api";
import ListTaskitem from "./../../taskitem/list-taskitem/ListTaskitem";
import { mapState, mapMutations } from "vuex";

export default {
    props: ["id"],
    components: {
        "list-taskitem": ListTaskitem
    },
    computed: {
        ...mapState(["taskgroup"])
    },    
    mounted: function () {
        getTaskgroupApi(this.id).then(response => {
            this.setTaskgroup(response.data.data);
        });
    },
    methods: {
        ...mapMutations(["setTaskgroup"]),
        // deleteTaskgroup(id) {
        //     deleteTaskgroupApi(id).then(
        //         result => {
        //             console.log(result.data.data),
        //             this.$router.go()
        //         },
        //         error => console.log(error.response.data.error_message)
        //     )
        // }
        listTaskgroups() {
            this.$router.push({name: "listTaskgroup"});
        }
    }
};
</script>
