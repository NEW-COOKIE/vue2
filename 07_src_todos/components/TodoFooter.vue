<template>
  <div class="todo-footer" v-show="allTodo">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTodal }}</span> /{{ allTodo }} 全部
    </span>
    <button class="btn btn-danger" type="button" @click="clearTdos">清除已完成任务</button>
  </div>
</template>

<script scoped>
export default {
  name: "TodoFooter",
  props: ["todos", "checkAllTodo", "createDoneTodo"],
  computed: {
    allTodo() {
      return this.todos.length;
    },

    // 统计已完成任务个数
    doneTodal() {
      /* return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0); */

      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },

    isAll: {
      get() {
        return this.allTodo === this.doneTodal && this.allTodo > 0;
      },

      set(value) {
        this.checkAllTodo(value);
      }
    },
  },

  methods: {
    /* checkAll(event) {
      this.checkAllTodo(event.target.checked);
    } */

    clearTdos() {
      this.createDoneTodo();
    }
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>