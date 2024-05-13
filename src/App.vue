<template>
  <HomePage/>
 <router-view></router-view>
</template>

<script>
import HomePage from '@/views/HomePage'

export default {
  name:'App',
  components:{
    HomePage
  }
}
</script>
