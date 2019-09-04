<template>
    <div>
        <div>
            <input v-model="inputMessage">
            <button @click="addMolde">Add</button>
        </div>
        <br/>
        <ol>
            <li v-for="index in this.$store.getters.getModlesLength" :key="index">
                <input type="checkbox">
                <span>{{this.$store.getters.getModleByIndex(index)}}</span>
            </li>
        </ol>

    </div>
</template>
<script>
    export default {
        name: 'AddButton',
        data: function(){
            return{
                inputMessage: "",
            }
        },
        created() {
            this.$store.dispatch("getAllModles");
            window.console.log(this.$store.getters.getModlesLength);
        },
        methods: {
            addMolde: function () {
                this.$store.dispatch("addModle",this.inputMessage);
                this.$store.commit("overwirteMoldes");
            }
        }
    }
</script>