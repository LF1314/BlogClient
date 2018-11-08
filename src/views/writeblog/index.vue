//书写博客网站

<template>
    <div class="writeblog_wraper">
          <div class="write_blog_wraper">
              <el-card class="write_blog_card">
                     <el-row>
                        <el-col :span='24' class="writeblogss">
                                 <el-form>
                                      <el-form-item
                                       label='标题'
                                      >
                                          <input class="myinput" type="text" v-model="formdata.title" placeholder="请输入标题">
                                             <i>博文封面</i>
                                             <el-upload
                                                class="avatar-uploader fr"
                                                action="https://upload-z1.qiniup.com"
                                                :data="obj"
                                                :on-success="handleAvatarSuccess"
                                            >
                                                <img v-if="formdata.corver" :src="formdata.corver" class="avatar">
                                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                            </el-upload>
                                      </el-form-item>
                                      <el-form-item
                                      label='分类'
                                      > 
                                            <el-select
                                                v-model="formdata.category"
                                                multiple
                                                filterable
                                                allow-create
                                                default-first-option
                                                placeholder="分类可自行添加其他分类">
                                                <el-option
                                                v-for="item in options5"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                      </el-form-item>
                                      <el-form-item>
                                               
                                                  <mavon-editor 
                                                    class="mavon"
                                                     v-model='formdata.contentext'
                                                      @change="onEditorChange"
                                                      ref=md 
                                                      @imgAdd="$imgAdd" 
                                                    />
                                      </el-form-item>
                                      <el-form-item class="fabuitem">
                                          <el-button class="fabumybtn" @click="addblog">
                                              发布文章
                                          </el-button>
                                      </el-form-item>
                                 </el-form>
                        </el-col>
                    </el-row>
              </el-card>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import funcs from '../../until/funcs.js'
    export default
    {
        name:"writeblog",
        data()
        {
            return{
                token:'',
                obj:{
                    token:''
                },
                 formdata:{
                    corver:'',
                    title:'',
                    creatime:'',
                    content:'',
                    contentext:'',
                    category:[],
                    author:'',
                    linuxtime:''
                 },
                   options5: [{
                                value: '工作',
                                label: 'job'
                                }, {
                                value: '生活',
                                label: 'life'
                                }, {
                                value: 'JavaScript',
                                label: 'JavaScript'
                                }],
}
        },
        created(){
            axios.get("http://upload.yaojunrong.com/getToken")
            .then(res => {
                this.token =res.data.data
                this.obj.token =this.token          
            });
        },
        methods:{
             handleAvatarSuccess(file) {
             this.formdata.corver = file.url;
                   },
               onEditorChange(value,render){
                //    console.log(render)
                   this.formdata.content = render          
                   },
             //发布文章
             addblog(){
                 console.log('...')
               let data = +new Date()
               this.formdata.linuxtime = data
               this.formdata.creatime = funcs.changedata(data)
               this.formdata.author = this.$store.state.userinfo._id
            //    console.log(this.formdata)
               if(this.formdata.content && this.formdata.title){
                     this.$axios.post('/blog/add',this.formdata).then(res=>{
                         if(res.code == 200){
                             this.$message.success({message:res.msg})
                             setTimeout(() => {
                                 this.$router.push('/index/home')
                             }, 500);
                         }
                     })
               }else{
                   this.$message.error('标题，内容不阔以为空')
               }

             },
             //上传图片
                   // 绑定@imgAdd event
        $imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           var formdata = new FormData();
           formdata.append('file', $file);
           formdata.append('token',this.token)
           axios({
               url: 'https://upload-z1.qiniup.com',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               let ul = url.data.url
            //    console.log(ul)
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               this.$refs.md.$img2Url(pos, ul);
           })
        }
        }
    }
</script>

<style scoped lang='scss'>
//富文本编辑框样式
.mavon{
    z-index: 100;
    height: 600px;
}
.writeblog_wraper{
    width: 1000px;
    margin: 0 auto;
}
.writeblogss{
  padding:20px 20px;
  box-sizing: border-box;
  margin: 10px auto;
  box-shadow: 0px -4px 2px rgba($color: #46493d, $alpha: .6);
  border-bottom: 1px solid rgba($color: #46493d, $alpha: .4);
}
.write_blog_wraper{
    margin: 20px auto;
}
.write_blog_card{
      background-color: #909097;
      border: none;  
}
.myinput{
       background-color: #413750;
       outline: none;
       border-radius: 6px;
       display:inline-block;
       height: 36px;
       color: #fff;
       width: 300px;
       border: none;
       padding-left: 10px; 
       margin-right: 20px;
}
input::-webkit-input-placeholder{ color:rgb(241, 231, 231)}
.quill-editor{
    height: 600px;
}
.el-select {
    /deep/ .el-input__inner
    {
     background-color: #413750;
     border: none;
    }
   
}
.newb_blog_list{
    background-color: #413750;
    border: none;
}
  .avatar-uploader .el-upload:hover {
     width: 90px;
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
   border-radius: 6px;
    border: 1px dashed #e6d4d4;
    font-size: 28px;
    color: #dae2ec;
    width: 90px;
    height: 90px;
    line-height: 90px;
    text-align: center;
  }
  .avatar {
    width: 90px;
    height: 90px;
    display: block;
  }
.avatar-uploader{
    display: inline-block;
    margin-right: 120px;
}
.fabuitem{
      box-shadow: -0px -3px 2px rgba($color: #5e6156, $alpha: .6);
      overflow: hidden;
      padding: 10px;
      box-sizing: border-box;
}
.fabumybtn{
    width: 150px;
   background-color: #413750;
   color: #ddd;
   border: none;
}
</style>
