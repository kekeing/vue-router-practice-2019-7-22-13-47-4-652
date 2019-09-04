<template>
    <div id = "todolist">
        <span>todolist</span>
        <br>
        <router-link to="/index">index</router-link>
        <Header/>
    </div>
</template>
<script>
    import Header from './header.vue'
    export default {
        components: {
          Header,
        },
        data: function(){
            return {
            }
        },
        methods : {
        }
    }
</script>