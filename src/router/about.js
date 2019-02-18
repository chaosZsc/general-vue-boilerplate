import { getComponentCreator } from '@/shared/utils/tools';

const getComponent = getComponentCreator(() => import(/* webpackChunkName: "home" */ '@/views/About'));

export default {
  path: '/about',
  name: 'About',
  component: () => getComponent(),
};
