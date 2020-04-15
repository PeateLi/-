<template>
    <div>
            <el-dialog 
            :title="DialogTitle" 
            :visible.sync="dialogVisible"
            :center='isCenter'
            :width='DialogWidth'
            :show-close='isShowClosse'
            :close-on-click-modal='closeOnModal'
            :close-on-press-escape='closeOnEscape'
            @close='CloseDialog()'>
               <slot name="main"></slot>
               <slot name="footer"></slot>
            </el-dialog>
    </div>
</template>


<script>
export default {
    data(){
        return {
            dialogVisible:this.isShowDialog
        }
    },
    props:{
        DialogTitle:{   //弹窗标题设置
            type:String,
            default:''
        },
        isShowDialog:{    //控制弹窗显示隐藏
            type:Boolean,
            default:false
        },
        isCenter:{   //弹窗内容是否居中
            type:Boolean,
            default:false
        },
        DialogWidth:{   //弹窗宽度
            type:String,
            default:''
        },
        isShowClosse:{   //是否显示关闭
            type:Boolean,
            default:true
        },
        closeOnModal:{   //点击背景是否可以关闭
            type:Boolean,
            default:true
        },
        closeOnEscape:{   //按esc是否可以关闭
            type:Boolean,
            default:true
        }

    },
    methods:{
        CloseDialog(){
            let _this = this
            _this.$emit('CloseDialog',false)
        }
    }
}
</script>


<style lang="less" scoped>

</style>