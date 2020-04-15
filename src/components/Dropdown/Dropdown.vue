<template>
    <div>
            <el-dropdown>
            <slot></slot>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in dropMenu" :key="item.name">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
        dropMenu:{
            type:Array,
            default:() => {
                return []
            }
        }
    }
}
</script>


<style lang="less" scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>