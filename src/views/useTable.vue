
<template>
  <div>
    <tm-table v-bind:columns="columns" :dataSource="dataSource" :hasIndex="true">
      <div slot="handleColumn">
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </div>
    </tm-table>
  </div>
</template>
 
<script>
 
  export default {
    components: {
      TmTable:() => import('../components/Table/Table')
      },
    data() {
      return {
        columns: [{
          hasSort: false,  //<Boolean> 是否排序
          isShow: true,  //<Boolean> 是否展示
          prop: 'name',   //<String>  对应属性名
          label: '姓名',  //<String>   表头标签
        },
          {
            hasSort: false,  //<Boolean> 是否排序
            isShow: true,  //<Boolean> 是否展示
            prop: 'date',   //<String>  对应属性名
            label: '日期',  //<String>   表头标签
          },
          {
            hasSort: false,  //<Boolean> 是否排序
            isShow: true,  //<Boolean> 是否展示
            prop: 'org',   //<String>  对应属性名
            label: '单位',  //<String>   表头标签
          },
          {
            hasSort: false,  //<Boolean> 是否排序
            isShow: true,  //<Boolean> 是否展示
            prop: 'id',    //<String>  对应属性名
            label: '身份证', //<String>   表头标签
          }],
        dataSource: [
          {
            name: '小明',
            id: '123456',
            org: '程序员',
            date: '2017-12-12',
            sex: '男'
          },
          {
            name: '小红',
            id: '456789',
            org: '行政',
            date: '2017-11-12'
          },
        ]
      }
    },
    methods: {
      handleClick(row){
        console.log(row.id+"-------")
      },
    }
  }
</script>
 
<style scoped>
 
</style>