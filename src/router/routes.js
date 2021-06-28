import HomeLayout from "layouts/HomeLayout";
import Register from "components/Modals/Register";
import PageIndex from "pages/Index";
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'user/:name', component: () => import('pages/user/UserIndex.vue') },
      { path: 'user/:name/mycourses', component: () => import('pages/user/UserCourses.vue') },
    //  { path: 'login', component: () => import('components/EssentialLink') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
