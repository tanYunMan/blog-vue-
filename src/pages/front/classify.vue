<template>
<!-- 
    动态控制li背景图片 
-->
    <div id="classify">
        <!-- <img src="../../assets/01.jpg" alt=""> -->
        <ul>
            <li>
                <div class='shade'>
                    <div class='content'>
                        <a :href="tagName[0].url">{{tagName[0].name}}</a>
                    </div>
                </div>
            </li>
            <li>
                <div class='shade'>
                    <div class='content'>
                        <a :href="tagName[1].url">{{tagName[1].name}}</a>
                    </div>
                </div>
            </li>
            <li>
                <div class='shade'>
                    <div class='content'>
                        <a :href="tagName[2].url">{{tagName[2].name}}</a>
                    </div>
                </div>
            </li>
            <li>
                <div class='shade'>
                    <div class='content'>
                        <a :href="tagName[3].url">{{tagName[3].name}}</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
// import List from '../../common/component/list.vue'
import Nav from '../../common/component/nav.vue'
export default {
    data(){
        return{
            //图片地址
            imgUrl:[
                {url:'../../assets/01.jpg'},
                {url:'../../assets/02.jpg'},
                {url:'../../assets/03.jpg'},
                {url:'../../assets/04.jpg'},
            ],
            tagName:[
                {name:'春季',url:''},
                {name:'夏季',url:''},
                {name:'秋季',url:''},
                {name:'冬季',url:''}
            ]
        }
    },
    components:{
        // List,
        Nav,
    },
    // beforeCreate(){
    //     var li = document.getElementsByTagName('li');
    //         for(var i=0;i<li.length;i++){
    //             console.log(li[i])
    //             console.log(this.imgUrl[i].url)
    //             var url = require(this.imgUrl[i].url)
    //             li[i].style.backgroundImage = 'url('+url+')'
    //         }
    // },
    mounted(){
        // document.documentElement.style.overflowY = 'hidden';
        this.getHeight();
        this.controlSize();
        window.onresize = () => {
                   this.getHeight();
                   this.controlSize();
                }
    },
    methods:{
        //获取浏览器的高度和宽度并改变目标的高宽
        getHeight(){
            var winWidth;
            var winHeight;
            var uls = document.getElementsByTagName('ul')
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
            uls[0].style.height = winHeight+'px';
        },
        //设置li的背景图片
        // setImg(){
        //     var li = document.getElementsByTagName('li');
        //     for(var i=0;i<li.length;i++){
        //         console.log(li[i])
        //         console.log(this.imgUrl[i].url)
        //         li[i].style.backgroundImage = 'url('+this.imgUrl[i].url+')'
        //     }
        // },
        //控制图片的大小
        controlSize(){
            var li = document.getElementsByTagName('li');
            var shade = document.getElementsByClassName('shade');
            for(var i=0;i<li.length;i++){
                console.log(li[i])
                console.log(this.imgUrl[i].url)
                // li[i].style.backgroundImage = 'url('+this.imgUrl[i].url+')'
                li[i].style.backgroundSize = li[i].offsetWidth+'px'+' '+li[i].offsetHeight+'px'
                shade[i].style.height = li[i].offsetHeight+'px'
            }
        }
    }
}
</script>
<style lang='less' scoped>
#classify{
    border: 1px solid red;
    min-width: 1500px;
    ul {
        display: flex;
        padding: 0px;
        margin: 0px;
        li{
        border:1px solid blue;
        list-style-type: none;
        display: inline-block;
        flex-grow: 1;
        background-image: url('../../assets/04.jpg');
        background-repeat: no-repeat;
        }
    }
    .shade{
        background-color: rgba(123, 61, 235, 0.4);
        border: 1px solid blue;
        display: flex;
        justify-content: center;
        align-items: center;
        .content{
            border: 1px solid black;
            padding:20px 30px;
            font-size: 40px;
            a:link ,a:visited,a:hover,a:active { 
                text-decoration: none;
                color: black;
                }
        }
    }
}
</style>