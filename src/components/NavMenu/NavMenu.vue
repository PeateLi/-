<template>
    <div class="menu">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :default-active="$route.name" 
      active-text-color="#ffd04b"
      router>
      <div v-for="(item,index) in $router.options.routes">
          <el-submenu v-if="item.children != undefined&&item.hidden" :index='index+""'  :key="item.name">
            <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item-group>
            <el-menu-item v-for="(data,i) in item.children"  :index="data.path" :key="data.path">{{data.meta.title}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
         <el-menu-item v-else-if="item.hidden" :index="item.path" :key="item.name">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
      </div>
    </el-menu>
    </div>
</template>


<script>
export default {
    data(){
        return {
        }
    },
    methods:{
         handleOpen(key, keyPath) {
            console.log(key)
            console.log(keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted(){
        let _this = this
        console.log(_this.$router.options.routes)
    }
}
</script>

<style lang="less" scoped>
.menu{
    height: 100%;
}
/deep/ .el-menu-vertical-demo.el-menu{
  height: 100%;
}
</style>