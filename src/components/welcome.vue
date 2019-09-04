<template>
    <div id = "welcome">
        <input placeholder="请输入姓名" v-model="inputUserName">
        <br>
        <button @click="setUserName">jump to index</button>

    </div>
</template>
<script>
    
    export default {
        data: function(){
            return {
                inputUserName : "",
            }
        },
        methods : {
            setUserName : function () {
                this.$store.commit("setName",this.inputUserName);
                window.console.log(this.$store.getters.getName);
                this.$router.push({path : "index"});
            }
        }
    }
</script>