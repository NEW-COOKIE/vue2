<template>
<div>
  <School></School>
  <hr>
  <Student></Student>
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
  
  components: {
    Student,
    School
  }
}
</script>
