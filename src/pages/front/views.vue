<template>
    <div id='views'>
        <div class='left'>
            <div class='header'>

            </div>
            <div class='bigPic'>
                <template>
                    <el-carousel indicator-position="outside" >
                        <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </template>
            </div>
            <div class='selectPic'>

            </div>
        </div>
        <div class='right'>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.setSize();
    },
    methods:{
        //获取浏览器的高宽并设置
        setSize(){
            var winWidth;
            var winHeight;
            // 获取窗口宽度
            if (window.innerWidth)
            winWidth = window.innerWidth;
            else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
            // 获取窗口高度
            if (window.innerHeight)
            winHeight = window.innerHeight;
            else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
            // 通过深入 Document 内部对 body 进行检测，获取窗口大小
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
            {
            winHeight = document.documentElement.clientHeight;
            winWidth = document.documentElement.clientWidth;
            }
            var left = document.getElementsByClassName('left');
            var right = document.getElementsByClassName('right');
            left[0].style.height = winHeight+'px'
            right[0].style.height = winHeight+'px'
        }
    }
}
</script>
<style lang="less" scoped>
#views{
    border: 1px solid red;
    .left{
        width: 80%;
        // background-color: lightgreen;
        float: left;
        // border: 1px solid red;
        .header{
            height:100px;
            border: 1px solid blue;
        }
        .bigPic{
            height:630px;
            border: 1px solid green;
            .el-carousel__item h3 {
                color: #475669;
                font-size: 18px;
                opacity: 0.75;
                line-height: 300px;
                margin: 0;
            }
  
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
  
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
        .selectPic{
            height: 200px;
            border: 1px solid purple;
        }
    }
    .right{
        width: 20%;
        // border: 1px solid green;
        background-color: lightgray;
        float: right;
    }
}
</style>