// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';
// 使用Vuex插件
Vue.use(Vuex);

import countOpaction from './countOpaction';
import personsOpaction from './personsOpaction'

export default new Vuex.Store({
  modules: {
    countAbout: countOpaction,
    personsAbout: personsOpaction
  }
})
