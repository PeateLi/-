<template>
  <!-- 页面主体 -->
  <div id="home" style="height: 100%;">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import '../styles/home.scss'
  export default {
    data() {
      return {
      }
    },
    methods: {
    
    },
    mounted(){
    }
  };
</script>

<style scoped>

</style>