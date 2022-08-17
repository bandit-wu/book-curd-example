import Vue from 'vue'
import Router from 'vue-router'
import bookadd from '../components/book-add.vue'
import login from '../components/login.vue'
import booklist from '../components/book-list.vue'
import bookdetail from '../components/book-detail.vue'
import register from '../components/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/booklist',
      name: 'booklist',
      component: booklist
    },
    {
      path: '/bookadd',
      name: 'bookadd',
      component: bookadd
    },
    {
      path: '/bookdetail',
      name: 'bookdetail',
      component: bookdetail
    }
  ]
})
