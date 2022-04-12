import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue';
import Metadas from '../views/Metadas.vue';
import Sobre from '../views/Sobre.vue';
import Submissao from '../views/Submissao.vue';
import Validacao from '../views/Validacao.vue';
import Login from '../views/Login.vue';
import Sugestao from '../views/Sugestao.vue';
import Relatos from '../views/Relatos.vue';
import Links from '../views/Links.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/metadados',
      name: 'metadados',
      component: Metadas
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/submissao',
      name: 'submissão',
      component: Submissao
    },
    {
      path: '/validacao',
      name: 'validação',
      component: Validacao
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sugestao',
      name: 'sugestão',
      component: Sugestao
    },
    {
      path: '/relatos',
      name: 'relatos',
      component: Relatos
    },
    {
      path: '/links',
      name: 'links',
      component: Links
    }
  ]
})
