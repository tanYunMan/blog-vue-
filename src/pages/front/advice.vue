<template>
    <div id='advice'>
        <div class='visitors'>
            <div class='header'>
                <b>致访客</b>
            </div>
            <p>
                感谢您对我的博客提出您的宝贵的意见。在收到您的意见后,我们会及时的给出我们的处理方案。
                如果您需要知道我们具体的解决方案的话可以留下您的联系方式喔。我们会及时的通知您喔,
                也请您监督我们的工作喔对了,如果您的建议被我们采用后,我们会给予您一定的奖励喔。
                再次感谢您对我们工作的支持!
            </p>
        </div>
        <div class='myAdvice'>
            <div class='header'>
                <b>我的建议</b>
            </div>
            <div class='inputs'>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="活动区域" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动形式" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             ruleForm: {
          region: '',
          delivery: false,
          desc: ''
        },
        rules: {
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
        }
    },
    methods:{
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
      }
    }
}
</script>
<style lang="less" scoped>
#advice{
    .visitors{
        p{
            padding:0px 50px;
            text-align: center;
            line-height: 30px;
            margin: 25px 0px;
        }
    }
    .header{
        border: 1px solid lightgray;
        background-color: #00FFFF;
        padding: 10px 25px;
        font-size: 25px;
    }
    .myAdvice{
        .inputs{
            display: flex;
            justify-content: center;
            align-items: center;
            // width: 50%;
            padding: 50px 0px;
        }
    }
}
.el-form-item{
    margin-top: 50px;
    width: 600px;
    .el-button{
        margin-left: 100px;
    }
    .el-button+.el-button {
        margin-left: 100px;
    }
    .el-select{
        width: 100%;
    }
    // .el-input__inner{
    //     border-radius: 10%;
    //     border: 1px solid red;
    // }
}
</style>