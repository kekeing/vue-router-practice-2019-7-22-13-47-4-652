<template>
    <div>
        <div>
            <input>
            <button>Add</button>
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
        beforeCreate() {

            this.$store.dispatch("getAllModles");
            window.console.log(this.$store.getters.getModlesLength);
        }
    }
</script>