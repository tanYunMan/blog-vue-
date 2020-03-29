<template>
    <div id='perMessage'>
        <div class='left one'>

        </div>
        <div class='left two'>

        </div>
        <div class='left three'>

        </div>
        <div class='left four'>

        </div>
        <div class='left five'>

        </div>
        <div class='left six'>

        </div>
        <div class='left seven'>

        </div>
        <div class='left eight'>

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
        this.setSite();
        this.getSize();
        window.onresize = () => {
            console.log("浏览器窗口大小实时监听");
            this.getSize();
        }
    },
    methods:{
        //获取浏览器窗口的高度
        getSize(){
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
            var perMessage = document.getElementById('perMessage');
            perMessage.style.height = winHeight+'px';
        },
        //动态调整每一项的位置
        setSite(){
            var left = document.getElementsByClassName('left');
            for(var i=0;i<left.length;i++){
                left[i].style.top = i*50+100+'px';
                left[i].style.left = 350-i*50+'px';
            }
        }
    }
}
</script>
<style lang="less" scoped>
#perMessage{
    background-image: url('../../assets/13.png');
    background-repeat: no-repeat;
    background-size: cover;
    border:1px solid red;
    .left{
        border: 1px solid red;
        height: 30px;
        width: 300px;
        position: absolute;
    }
    // .one{
    //     top: 100px;
    //     left: 400px;
    //     }
    // .two{
    //     top: 150px;
    //     left: 400px;
    // }
}
</style>