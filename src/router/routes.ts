// const Home = () => import('@/views/Home.vue')
import Home from '@/views/Home.vue';
export default [
  {
      path: '/home',
      redirect: '/'
  },
  {
    path: '/',
    components: {
      default: Home
    },
  }
]



