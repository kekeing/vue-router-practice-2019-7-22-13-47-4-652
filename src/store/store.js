import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store =new Vuex.Store({
    state: {
        username : String
    },
    getters: {
        getName: state => state.username,
    },
    mutations: {
        setName(state,name){
        state.username = name;
        }
    }

    }
)

export default store