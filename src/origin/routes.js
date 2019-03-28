import home from './assets/components/_home.vue';
import about from './assets/components/_about.vue';
import update from './assets/components/_update.vue';
import docs from './assets/components/_docs.vue';

export default  [
  {path: '/home',component:home},
  {path: '/about',component:about},
  {path: '/update',component:update},
  {path: '/docs',component:docs},
  {path: '/', redirect: '/home'},
  {path: '/none', redirect: '/home'}
]
