import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView.vue'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView.vue'
import RecordIndexView from '@/views/record/RecordIndexView.vue'
import BotIndexView from '@/views/user/bot/BotIndexView.vue'
import UserInfoView from '@/views/user/UserInfoView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/pk'
    },
    {
      path: '/pk',
      name: 'pk_index_view',
      component: PkIndexView
    },
    {
      path: '/record',
      name: 'record_index_view',
      component: RecordIndexView
    },
    {
      path: '/ranklist',
      name: 'ranklist_index_view',
      component: RanklistIndexView
    },
    {
      path: '/bot',
      name: 'bot_index_view',
      component: BotIndexView
    },
    {
      path: '/userinfo',
      name: 'userinfo_index_view',
      component: UserInfoView
    }
  ]
})

export default router
