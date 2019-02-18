import Vue from 'vue';
import Router from 'vue-router';

import home from './home';
import about from './about';

console.log(home);

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Home',
      },
    },
    home,
    about,
  ],
});

export default router;
