import { getComponentCreator } from '@/shared/utils/tools';

const getComponent = getComponentCreator(() => import(/* webpackChunkName: "home" */ '@/views/Home'));

export default {
  path: '/home',
  name: 'Home',
  component: () => getComponent(),
};
