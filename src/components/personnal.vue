<template>
    <div id="personnal">
        <span>personnal</span>
        <br>
        <router-link to="/index">index</router-link>
        <br>
        <img alt="picture" src="../assets/1.png">
        <h3>电话：12345678</h3>
        <h3>姓名: {{userName}}</h3>

    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                userName: "",
            }
        },
        created() {
            this.userName = this.$store.getters.getName;

        },
    }
</script>