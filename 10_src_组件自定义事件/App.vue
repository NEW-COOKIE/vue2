<template>
<div>
  <h1>学生姓名:{{name}}</h1>

  <!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
  <School :getSchoolName='getSchoolName'></School>

  <hr>
  <!-- 通过父组件给子组件绑定自定义事件实现: 子给父传递数据(第二种写法) -->
  <Student ref="student" @click.native="show"></Student>

  <!-- 通过父组件给子组件绑定自定义事件实现: 子给父传递数据(第一种写法) -->
  <!-- <Student @studentname='getStudentName' @demo='test'></Student> -->
</div>
</template>

<script>
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('获取了学校名字', name);
    },

    getStudentName(name, ...params){
      console.log('获取了学生名字', name, params);
      this.name = name;
    },

    test() {
      console.log('demo');
    },

    show() {
      console.log('click事件');
    }
  },
  mounted() {
    this.$refs.student.$on('studentname', this.getStudentName); // 绑定自定义事件
    // this.$refs.student.$once('studentname', this.getStudentName); // 绑定自定义事件(一次性)
    // setTimeout(() => {
    //   this.$destroy();
    // }, 3000);
  },
  
  components: {
    Student,
    School
  }
}
</script>
