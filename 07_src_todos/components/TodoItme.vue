<template>
  <li>
    <label>
      <input type="checkbox" :checked='todoItem.done' @change="handleTodo(todoItem._id)"/>

      <!-- 在子组件修改数据推荐 违反了props修改数据的原则 -->
      <!-- <input type="checkbox" v-model='todoItem.done'/> -->
      <span>{{todoItem.title}}</span>
    </label>
    <button class="btn btn-danger" type="button" @click="deleteHandle(todoItem._id)">删除</button>
  </li>
</template>

<script scoped>
export default {
  // 接收 todoItem,chenckTodo
  props: ['todoItem', 'chenckTodo', 'deleteTodo'],
  name: "TodoItem",
  methods: {
    // 勾选
    handleTodo(id) {
      this.chenckTodo(id);
    },

    // 删除
    deleteHandle(id) {
      if (confirm('是否删除')) {
        this.deleteTodo(id);
      }
      
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label, li input {
  vertical-align: middle;
  margin-left: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ccc;
  display: block;
}
li:hover button {
  display: block;
}
</style>