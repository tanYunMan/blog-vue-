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
                <div class='row'>
                    <div class='detailed'>
                        <img src="../../assets/03.jpg" alt="">
                        <div class='operation'>
                            <div class='name'>
                                作品的名字
                            </div>
                            <div class='operations'>
                                <img :src="likeUrl" alt="" @click="likes()">
                                {{likes}}
                                <img :src="wordUrl" alt="" @click="word++">
                                {{word}}
                            </div>
                        </div>
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/04.jpg" alt="">
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/01.jpg" alt="">
                    </div>
                </div>
                <div class='row'>
                    <div class='detailed'>
                        <img src="../../assets/04.jpg" alt="">
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/01.jpg" alt="">
                    </div>
                    <div class='detailed'>
                        <img src="../../assets/03.jpg" alt="">
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
            icons:[
                {url:'../../assets/like.png'},
                {url:'../../assets/likes.png'},
                {url:'../../assets/word.png'},
            ],
            likes:0,
            word:0,
            likeUrl:'',
            wordUrl:'',
        }
    },
    components:{
        Nav
    },
    mounted(){
        // this.setPhotoMessage();
        // window.onload = function(){
            this.getPhotoRate();
        // }
    },
    methods:{
        //获取图片的高宽(线上)
        setPhotoMessage(){
            var img_url = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585146886&di=1a74f4c8e5dfa9ccc382cb0e8c9acaae&src=http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg';
            var img = new Image();
            img.src = img_url;
            console.log('width:'+img.width+',height:'+img.height)
        },
        //获取图片的高宽比(线下也可以线上)
        getPhotoRate(){
            var imgs = document.getElementsByTagName('img');
            var detailed = document.getElementsByClassName('detailed');
            var height;
            var width = 200;
            var rate;
            for(var i=1;i<imgs.length;i++){
                rate = imgs[i].offsetHeight/imgs[i].offsetWidth;
                height = rate*width;
                imgs[i].style.height = height+'px';
                imgs[i].style.width = width +"px";
            }
            for(var a=0;a<detailed.length;a++){
                detailed[a].style.width = width+'px';
            }
            console.log('imgs',imgs) 
        },
        //点赞
        likes(){
            this.likes++;
            // this.likeUrl = this.icons
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
        height: 800px;
        display: flex;
        flex-direction: column;
        .row{
            border: 1px solid purple;
            margin:30px 0px 30px 30px;
            display: flex;
            .detailed{
                border: 1px solid green;
                margin-right: 30px;
            }
        }
    }
}
</style>