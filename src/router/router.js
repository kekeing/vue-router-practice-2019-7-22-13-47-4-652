import Vue from "vue";
import Router from "vue-router";
import index from '../components/index.vue'
import welcome from '../components/welcome.vue'



Vue.use(Router);

const routes = [
    {path: '/index',name: index, component : index},
    {path: '/welcome',name: welcome, component : welcome},

]

const router = new Router({routes});

export default router;