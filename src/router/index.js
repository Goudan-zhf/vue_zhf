import Vue from 'vue'
import Router from 'vue-router'
import User from "../components/User";
import First from "../components/First";
import User_info from "../components/User_info";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'First', component: First},
        {path: '/User', name: 'User', component: User},
        {path: '/User_info/:id/：username/：bir/:info', name: 'User-info', comments: User_info},
    ]
})
