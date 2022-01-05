// 引入vue
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';
// 使用Vuex插件
Vue.use(Vuex);
// 使用actions 用于响应组件中的动作
const actions = {
 /*  Jia(context, value) {
    context.commit('JIA', value);
  },

  Jian(context, value) {
    context.commit('JIAN', value);
  }, */

  jiaOdd(context, value) {
    if (context.state.num % 2) {
      context.commit('JIA', value);
    }
  },

  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA', value);
    }, 500);
  }
};
// 使用mutations 用于操作组件中的动作
const mutations = {
  JIA(state, value) {
    state.num += value;
  },

  JIAN(state, value) {
    state.num -= value;
  },

  ADDPERSON(state, value) {
    state.persons.unshift(value);
  }
};
// 使用mutations 用于操作数据
const state = {
  num: 0,
  persons: [
    {id: '001', name: '张三'}
  ]
};

const getters = {
  bigNum(state) {
    return state.num * 10;
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
