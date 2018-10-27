//书写博客网站

<template>
    <div class="writeblog_wraper">
          <div class="write_blog_wraper w960">
              <el-card class="write_blog_card">
                     <el-row>
                        <el-col :span='20'>
                                 <el-form>
                                      <el-form-item
                                       label='标题'
                                      >
                                          <input class="myinput" type="text" placeholder="请输入标题">
                                      </el-form-item>
                                      <el-form-item
                                      label='分类'
                                      >

                                      </el-form-item>
                                      <el-form-item>
                                              <quill-editor
                                                v-model="formdata.content"
                                                ref="myQuillEditor"
                                                :options="editorOption"
                                                >
                                                </quill-editor>
                                      </el-form-item>

                                 </el-form>
                        </el-col>
                        <el-col :span='4'>

                        </el-col>
                    </el-row>
              </el-card>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend)
    export default
    {
        name:"writeblog",
        components:{
            quillEditor,
        },
        data()
        {
            return{
                token:'',
                 formdata:{
                  content:'',
                  contentext:''
                 },

                editorOption: {
                     modules: {
                         ImageExtend: {  // 如果不作设置，即{}  则依然开启复制粘贴功能且以base64插入 
                             name: 'file',  // 图片参数名
                             size: 3,  // 可选参数 图片大小，单位为M，1M = 1024kb
                             action: 'https://upload-z1.qiniup.com',  
                             response: (res) => {
                                 return res.url
                             },
                             headers: (xhr) => {
                             }, 
                             change: (xhr, formData) => {
                             // xhr.setRequestHeader('myHeader','myValue')
                             // formData.append('token', 'myToken')
                              formData.append('token',this.token)
                            
                             } 
                         },
                         toolbar: {  
                             container: container,  
                             handlers: {
                                 'image': function () {  
                                     QuillWatch.emit(this.quill.id)
                                 }
                             }
                         }
                     }
                 }

            }
        },
        created(){
            axios.get("http://upload.yaojunrong.com/getToken")
            .then(res => {this.token =res.data.data});
        }
    }
</script>

<style scoped lang='scss'>
.write_blog_wraper{
    margin: 20px auto;
}
.write_blog_card{
      
      background-color: #231536;
      border: none;
     
}
.myinput{
       background-color: #332547;
       outline: none;
       border-radius: 6px;
       display:block;
       height: 36px;
       color: #fff;
       width: 300px;
       border: none;
       padding-left: 10px; 
}
input::-webkit-input-placeholder{ color:rgb(194, 154, 154)}
</style>
