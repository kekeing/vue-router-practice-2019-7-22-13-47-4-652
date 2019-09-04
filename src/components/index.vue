<template>
    <div id = "index">
        <span>index</span>
        <h3>姓名： {{userName}}</h3>
        <ul>
            <li>
                <router-link to="/personnal">personnal</router-link>
            </li>
            <li>
                <router-link to="/todolist">todolist</router-link>
            </li>
        </ul>

    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                userName : ""
            }
        },
        created(){
            this.userName = this.$store.getters.getName;
        },
        methods : {
        }
    }
</script>