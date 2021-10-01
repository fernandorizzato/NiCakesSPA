import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Cardapio from '../views/Cardapio.vue'
import Contato from '../views/Contato.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio
    },
    {
        path: '/cardapio',
        name: 'Cardapio',
        component: Cardapio
    },
    {
        path: '/contato',
        name: 'Contato',
        component: Contato
    }
]

const router = new VueRouter({
    routes
})

export default router