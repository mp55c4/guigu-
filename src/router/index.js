import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TESTOA审批',
    component: () =>
      import('../views/index.vue'),
  },
  {
    path: '/apply/:processTemplateId',
    name: 'Apply',
    component: () =>
      import('../views/apply.vue'),
  },
  {
    path: '/list',
    name: '流程列表',
    component: () =>
      import('../views/list.vue'),
  },
  {
    path: '/show/:id/:taskId',
    name: '流程详情',
    component: () =>
      import('../views/show.vue'),
  },
  {
    path: '/user',
    name: '基本信息',
    component: () =>
      import('../views/user.vue'),
  },
  
  {
    path: '/test',
    name: '测试',
    component: () =>
      import('../views/test.vue'),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
