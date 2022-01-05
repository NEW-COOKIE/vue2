<template>
<ul>
  <li v-for="n in news" :key="n.id">{{n.title}}</li>
</ul>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      news: [
        {id: '001', title: 'new01'},
        {id: '002', title: 'new02'},
        {id: '003', title: 'new03'},
      ]
    }
  },
}
</script>
