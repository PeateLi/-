<template>
    <div>
         <el-select
        v-model="SelectValue"
        :disabled='isDisabled'
        placeholder="请选择"
        @change='ChangeSelect'
        :clearable='isClearable'
        :filterable='isFilterable'
        :multiple='isMultiple'>
            <el-option
            v-for="item in SelectOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
            <!-- <span style="float: left">{{ item.label }}</span>     //是否自定义内容
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span> -->
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data(){
        return {
            SelectValue:this.activeSelect    //下拉菜单选择值
        }
    },
    props:{
        SelectOption:{    //下拉菜单选择项
            type:Array,
            default:() => {
                return []
            }
        },
        isDisabled:{   //是否禁用下拉菜单
            type:Boolean,
            default:false
        },
        isClearable:{   //是否可情况下拉菜单
            type:Boolean,
            default:false
        },
        isFilterable:{   //是否可搜索功能
            type:Boolean,
            default:false
        },
        isMultiple:{    //是否可以多选   SelectValue需要时数组
            type:Boolean,
            default:false
        },
        activeSelect:{    //默认选中
            type:String,
            default:''
        }
    },
    methods:{
        ChangeSelect(){    //下拉菜单发生改变时返回自定义方法
            let _this = this
            _this.$emit('GetChangeSelect',_this.SelectValue)
        }
    }
}
</script>