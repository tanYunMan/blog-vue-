<template>
    <div id='photo'>
        <div class='header'>
            <Nav></Nav>
        </div>
        <div class='content'>
            <div class='title'>
                <div class='top'>
                    <b>摄影</b>
                    <img src="../../assets/05.png" alt="">
                </div>
                <p>优质摄影师交流社区，超过500万摄影爱好者在此学习交流</p>
            </div>
            <div class='photos'>
                <!-- <div class='row'> -->
                    <div class='detailed'>
                        <img src="../../assets/03.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/04.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/01.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                <!-- <div class='row'> -->
                    <div class='detailed'>
                        <img src="../../assets/06.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/07.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/08.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                <div class='detailed'>
                        <img src="../../assets/09.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/10.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/11.jpg" alt="">
                        <div class='operation'>
                            <div class='name' style="float:left">
                                作品的名字
                            </div>
                            <div class='operations'  style="float:right">
                                <i v-bind:class='{iconfont:true,"icon-aixin-copy":isActive,"icon-aixin1":!isActive}' @click='clickLike()'></i>
                                {{likes}}
                                <i class='iconfont icon-liuyan'></i>
                                {{word}}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from '../../common/component/nav.vue'
export default {
    data(){
        return{
            likes:105,
            word:6,
            isActive:true,
            photoContent:[
                {name:'我的第一个作品',imgUrl:'',likeNum:12,worldNum:5},
                {name:'我的第二个作品',imgUrl:'',likeNum:134,worldNum:15},
                {name:'我的第三个作品',imgUrl:'',likeNum:102,worldNum:7},
                {name:'我的第四个作品',imgUrl:'',likeNum:14,worldNum:32},
                {name:'我的第五个作品',imgUrl:'',likeNum:45,worldNum:1},
                {name:'我的第六个作品',imgUrl:'',likeNum:38,worldNum:0},
                {name:'我的第七个作品',imgUrl:'',likeNum:96,worldNum:21},
            ]
        }
    },
    components:{
        Nav
    },
    mounted(){
        this.setPhotoMessage();
        this.getPhotoRate();
        // window.onresize = function(){
        //     this.getPhotoRate();
        // }
    },
    methods:{
        //获取图片的高宽(线上)
        setPhotoMessage(){
            var img_url = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=345047253,1474150922&fm=26&gp=0.jpg';
            var img = new Image();
            img.src = img_url;
            img.onload = function(){
                console.log('width:'+img.width+',height:'+img.height)
            }
            
        },
        //获取图片的高宽比(线下也可以线上)
        getPhotoRate(){
            var imgs = document.getElementsByTagName('img');
            var detailed = document.getElementsByClassName('detailed');
            var height;
            var width = 240;
            var rate;
            for(var i=1;i<imgs.length;i++){
                // console.log('imgs',typeof imgs[i]) 
                // console.log('imgs[i].offsetWidth',imgs[i].offsetWidth)
                rate = imgs[i].offsetHeight/imgs[i].offsetWidth;
                height = rate*width;
                imgs[i].style.height = height+'px';
                imgs[i].style.width = width +"px";
            }
            for(var a=0;a<detailed.length;a++){
                detailed[a].style.width = width+'px';
            }
            
            // console.log('imgs',imgs) 
            console.log('rate',rate)
        },
        //点赞
        clickLike(){
            
            if(this.isActive){
                this.likes++;
            }else{
                this.likes--;
            }
            this.isActive = !this.isActive
            console.log('clickLike')
        },
        //根据内容的宽度进行自动分行排列
        setRow(){
            //获取页面的宽度
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
            //获取内容的宽度并根据浏览器页面的宽度进行排列
            var img = document.getElementsByTagName('img');
            var allWidth = 0;
            for(var i=0;i<img.length;i++){
                allWidth += 280
            }
            allWidth = allWidth + 30;  
            if(allWidth>=winWidth){
                //如果元素的总宽度与间距之和大于浏览器的宽度之和
                var nums = Math.ceil(allWidth/winWidth);

            }
        },
        //设置detailed的高度
        setDetailedHeight(){
            var detailed = document.getElementsByClassName('detailed');
            var operation = document.getElementsByClassName('operation');
            var img = document.getElementsByTagName('img');
            for(var i=1;i<img.length;i++){
                detailed[i-1].style.height = img[i].offsetHeight + operation[i-1].offsetHeight + 'px';
            }
        },
        //测试
        test(){
            var img_url
        }
    }
}
</script>
<style lang="less" scoped>
.header{
    border-bottom: 1px solid black;
    padding: 20px 0px 10px 10px;
}
.content{
    .title{
        padding-left: 10px;
        
        .top{
            display: flex;
            padding-bottom: 10px;
            b{
                font-size: 50px;
                display: block;
            }
            img{
                display: block;
                margin-top: 10px;
                margin-left: 10px;
                height: 50px;
            }
        }
    }
    .photos{
        border: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        // flex-direction: column;
        // .row{
        //     border: 1px solid purple;
        //     margin:30px 0px 30px 0px;
        //     display: flex;
            .detailed{
                border: 1px solid green;
                margin: 30px;
                .operation{
                    padding:10px;
                    height: 25px;
                    i{
                        margin:0px 5px;
                    }
                    .operations{
                        margin-top:4px;
                    }
                }
            }
        // }
    }
}
// .icon-aixin1{
//     background-color: red;
// }
</style>