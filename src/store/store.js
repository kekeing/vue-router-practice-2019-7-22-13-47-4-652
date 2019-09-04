import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const store =new Vuex.Store({
    state: {
        username : String,
        modles : []
    },
    getters: {
        getName: state => state.username,
        getModlesLength : state => state.modles.length,
        getModles : state => state.modles,
        getModleByIndex : function (state) {
            return function (index) {
                return state.modles[index - 1];
            }
        },
    },
    mutations: {
        setName(state,name){
        state.username = name;
        },
        updateModles(state,modleList){
            state.modles = modleList;
        }
    },
    actions : {
        getAllModles(store) {
            axios.get('http://localhost:8080/list')
                .then(function (response) {
                    store.commit('updateModles', response.data);
                });
        }
    }

    }
)

export default store