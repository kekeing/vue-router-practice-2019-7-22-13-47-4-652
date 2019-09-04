<template>
    <div id = "todolist">
        <span>todolist</span>
        <br>
        <router-link to="/index">index</router-link>
        <Header/>
        <addButton/>
    </div>
</template>
<script>
    import Header from './header.vue'
    import addButton from './addButton.vue'
    export default {
        components: {
            Header,
            addButton,
        },
        data: function(){
            return {
            }
        },
        methods : {
        }
    }
</script>