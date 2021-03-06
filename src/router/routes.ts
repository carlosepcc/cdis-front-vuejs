import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/denuncias', component: () => import('pages/Denuncias.vue') },
    { path: '/casos', component: () => import('pages/Casos.vue') },
    { path: '/comisiones', component: () => import('pages/Comisiones.vue') }
    
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
