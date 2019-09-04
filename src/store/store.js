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
        },
        addModle(state,modle){
            state.modles.push(modle);
        },
        overwirteMoldes(state){
            let oldModles = state.modles;
            state.modles = [];
            for (let i =0;i<oldModles.length;i++){
                state.modles.push(oldModles[i]);
            }
        }
    },
    actions : {
        getAllModles(store) {
            axios.get('http://localhost:8080/list')
                .then(function (response) {
                    store.commit('updateModles', response.data);
                });
        },
        addModle(store,message){
            let newModle = {id : null,message:message,statevalue:"false"};
            axios.post('http://localhost:8080/list',newModle)
                .then(function (response) {
                window.console.log(response);
            })
        }
    }

    }
)

export default store