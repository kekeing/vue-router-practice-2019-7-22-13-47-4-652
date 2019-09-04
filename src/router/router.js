import Vue from "vue";
import Router from "vue-router";
import index from '../components/index.vue'
import welcome from '../components/welcome.vue'
import personnal from '../components/personnal.vue'
import todolist from '../components/todolist.vue'



Vue.use(Router);

const routes = [
    {path: '/index',name: index, component : index},
    {path: '/welcome',name: welcome, component : welcome},
    {path: '/personnal',name: personnal, component : personnal},
    {path: '/todolist',name: todolist, component : todolist},


]

const router = new Router({routes});

export default router;