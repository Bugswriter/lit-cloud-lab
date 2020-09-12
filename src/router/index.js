import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
	path: '/',
	name: 'Home',
	component: Home
    },
    {
	path: '/about',
	name: 'About',
	component: () => import('../components/About.vue')
    },
    {
	path: '/blog/new',
	name: 'CreateBlog',
	component: () => import('../components/CreateBlog.vue')
    },
    {
	path: '/blog',
	name: 'Blog',
	component: () => import('../components/Blog.vue')
    },
    {
	path: '/contact',
	name: 'Contact',
	component: () => import('../components/Contact.vue')
    }
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
