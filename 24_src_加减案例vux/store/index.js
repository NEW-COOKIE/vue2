// vuex 核心文件 用于创建store

// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);

// 准备actions 用于响应组件中的动作
const actions = {
  // jia(context, value) {
  //   context.commit('JIA', value);
  // },

  // jian(context, value) {
  //   context.commit('JIAN', value);
  // },

  jiaOdd(context, value) {
    if (context.state.n % 2) {
      context.commit('JIA', value);
    }
  },

  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value);
    }, 500);
  }
}
// 准备mutations 用于操作数据(state)
const mutations = {
  JIA(state, value) {
    state.n += value;
  },

  JIAN(state, value) {
    state.n -= value;
  }
}
// 准备state 用于存储数据
const state = { // 类似 data
  n: 0
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
});
