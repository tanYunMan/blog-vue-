<template>
    <div id='login'>
        <div class='form'>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-form-item> -->
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
    //    var checkAge = (rule, value, callback) => {
    //     if (!value) {
    //       return callback(new Error('年龄不能为空'));
    //     }
    //     setTimeout(() => {
    //       if (!Number.isInteger(value)) {
    //         callback(new Error('请输入数字值'));
    //       } else {
    //         if (value < 18) {
    //           callback(new Error('必须年满18岁'));
    //         } else {
    //           callback();
    //         }
    //       }
    //     }, 1000);
    //   };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    };
    return {
        ruleForm: {
          pass: '',
          checkPass: '',
        //   age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        //   age: [
        //     { validator: checkAge, trigger: 'blur' }
        //   ]
        }
      };
    },
    mounted(){
        this.setSize();
        this.changeStyle();
        window.onresize = () => {
            this.setSize();
            console.log("浏览器窗口大小实时监听");
        }
    },
    methods:{
        //表单
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        //获取浏览器的高宽并设置背景图片
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
            var login =document.getElementById('login');
            // login.style.width = winWidth+'px';
            login.style.height = winHeight+'px';
            // login.style.backgroundSize = winWidth+'px',winHeight+'px';
        },
        //动态更改样式
        changeStyle(){
            var lable = document.getElementsByTagName('label');
            var item = document.getElementsByClassName('el-form-item')
            for(var i=0;i<lable.length;i++){
                lable[i].style.color = 'black';
                item[i].style.marginBottom = "30px";
                console.log(item)
            }
        }
    }
}
</script>
<style lang="less" scoped> 
#login{
    background-image: url('../../assets/12.jpg');
    background-repeat: no-repeat;
    min-width: 1500px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .form{
        border: 1px solid lightgray;
        width: 500px;
        height: 220px;
        padding: 35px 30px 0px 0px;
        border-radius: 3%;
        background-color: rgba(85, 90, 85, 0.4);
        text-align: center;
        button{
            margin-right: 40px;
        }
    }
}
</style>