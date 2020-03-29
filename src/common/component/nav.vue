<template>
    <div id="nav">
        <el-breadcrumb separator="/">
            <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item> -->
            <el-breadcrumb-item  
            v-for="(item,i) in $store.state.navContent " 
            :key='i'
            :to="{ path: item.url }"
            >
            {{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>

</style>