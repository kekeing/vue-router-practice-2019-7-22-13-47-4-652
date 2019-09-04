<template>
    <div id = "index">
        <span>index</span>
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
            }
        },
        methods : {
        }
    }
</script>