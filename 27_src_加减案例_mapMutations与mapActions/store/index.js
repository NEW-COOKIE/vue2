// vuex核心文件 用于创建store

// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';

// 使用vuex插件
Vue.use(Vuex);

// 准备actions 用于响应组件中的动作
const actions = {
  // jia(context, value) {
  //   console.log(value);
  //   context.commit('JIA', value);
  // },

  // jian(content, value) {
  //   content.commit('JIAN', value);
  // },

  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA', value);
    }
  },

  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value);
    }, 500);
  }

}
// 准备mutations 用于操作state中的数据
const mutations = {
  JIA(state, value) {
    console.log(value);
    state.sum += value;
  },

  JIAN(state, value) {
    state.sum -= value;
  }
}
// 准备state 用于存储数据
const state = { // ===> data
  sum: 0
}

const getters = {
  bigSum(state) {
    return state.sum * 10;
  }
}

// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
