import { createRouter, createWebHistory } from 'vue-router'

// USANDO LAZY-LOADING
const Home = () => import('../views/Home/index.vue')
const FeedBacks = () => import('../views/Feedbacks/index.vue')
const Credentials = () => import('../views/Credencials/index.vue')

// USANDO DEFINE ASYNC COMPONENT DO PROPRIO VUE-ROUTER
// import { defineAsyncComponent } from 'vue-router';
// const FeedBacks = defineAsyncComponent({
//   loader: () => import('')
// })

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: FeedBacks,
    // PODEMOS ADICIONAR UM METADA DADOS PARA CADA ROTA, NO CASO ESTAMOS FALANDO
    // QUE O USUÁRIO PRECISA ESTÁ AUTENTICADO PARA ENTRAR NESTA ROTA.
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'credentials',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    // REGEX QUE TEM NA PRÓPRIA DOCUMENTAÇÃO DO VUE PARA QND Ñ EXISTIR ESTA ROTA /:pathMatch(.*)*
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
