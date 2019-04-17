//这里是粉丝列表页面
<template>
<div class="fans_wraper">
      <div class="nofans" v-if="!ishave">
              <div >
                    <p>还没有人关注你呢，，快去发布博文吧，张张粉😜😜😜😜</p>
                     <p>
                         <el-button type="text">
                            <router-link to="/index/write">
                             写博文
                            </router-link>
                         </el-button>
                     </p>
              </div>
      </div>
      <div class="havefans" v-else>
          <el-card class="fans_card">
                <div slot="header">
                        fans
                </div>
                 <el-table
                    :data="fans.filter(data => 
                    !search || data.username.toLowerCase()
                    .includes(search.toLowerCase()))"
                    style="width: 100%"
                    class="tabless"
                    >
                    <el-table-column
                    label="avatar"
                   >
                    <template slot-scope="scope">
                           <img :src="scope.row.avatar" class="table_img" alt="">
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="Name"
                    prop="username">
                    </el-table-column>
                    <el-table-column
                    label="join"
                    prop="creatime">
                    </el-table-column>
                    <el-table-column
                    align="right">
                    <template slot="header" slot-scope="slot">
                        <el-input
                        v-model="search"
                        size="mini"
                        placeholder="查询粉丝名字"/>
                    </template>
                    <template slot-scope="scope"> 
                        <el-button
                        size="mini"
                        type="danger"
                       >关注</el-button>
                    </template>
                    </el-table-column>
                </el-table>
          </el-card>

      </div>
</div>
    
</template>
<script>
    export default
    {
        name:'fans',
        data(){
            return{
              ishave:true,
              fans:[],
              search:""
            }
        },
        methods:{
          //获取用户粉丝
          getuserfans(){
              this.$axios.get('/user/fans',{id:this.$store.state.userinfo._id}).then(res=>{
                  if(res.code ==400){
                     this.ishave =false
                  }
                  else if(res.code ==200){
                    //   console.log(res)
                      this.fans = res.data
                  }
              })
          }
        },
        created(){
            this.getuserfans()
        }
    }
</script>

<style scoped lang='scss'>
.nofans{
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 40px;
    p{
        text-align: center;
        line-height: 2;
    }
}
.table_img{
    height: 50px;
    width: 50px;;
    border-radius: 50%;
}
.fans_card{
    background-color: rgb(155, 124, 124);
    border: none;
}
.el-table th, .el-table tr{
    background-color: rgb(163, 151, 151);
}
.el-table{
    border-radius: 20px;
}
</style>
