// 引入nanoid
import { nanoid } from 'nanoid';
// 引入axios
import axios from 'axios';

export default {
  namespaced: true,
  actions: {
    addWang(context, value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADDPERSON', value);
      } else {
        alert('只能添加王姓人员');
      }
    },

    addAjxx(context) {
      axios.get('https://api.muxiaoguo.cn/api/tiangourj').then(
        response => {
          const pobj = { id: nanoid(), name: response.data.data.comment };
          context.commit('ADDPERSON', pobj);
        },

        error => {
          alert(error.message);
        }
      )
    }
  },
  mutations: {
    ADDPERSON(state, value) {
      state.persons.unshift(value);
    },
    FIRESTPERSON(state) {
      state.firestName = state.persons[0].name;
    }
  },
  state: {
    persons: [
      { id: '001', name: '张三' }
    ]
  },
  getters: {
    firestName(state) {
      return state.persons[0].name
    }
  }
}