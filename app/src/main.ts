import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Math from '@/components/AppMathJax.vue';
import DynamicMath from '@/components/AppDynamicMathJax.vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import AppSpoiler from '@/components/AppSpoiler.vue';
import AppSvg from '@/components/AppSvg.vue';
import AppHorizLine from '@/components/AppHorizLine.vue';

Vue.component('Math', Math)
Vue.component('DynamicMath', DynamicMath)
Vue.component('AppInput', AppInput)
Vue.component('AppButton', AppButton)
Vue.component('AppSpoiler', AppSpoiler)
Vue.component('AppSvg', AppSvg)
Vue.component('HorizLine', AppHorizLine)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
