//分类
<template>
    <div class="catagory_wraper">
         <ul>
             <li class="types_item" v-for="(type,index) in types" :key="index">
                   <p>
                       {{type.title}}
                   </p>
             </li>
         </ul>
    </div>
</template>
<script>
   export default
   {
       name:'categoryList',
       props:{
           blogType:{
             type:Number
           }
       },
       data(){
            return{
                types:[]
            }
       },
       methods:{
           //获取分类
          async gettypes(){
             let data = await  this.$axios.get('/type')
              if(data.code == 200){
                  this.types = data.data
              }
           }
       },
       created() {
           this.gettypes()
       },
   }
</script>
<style scoped lang='scss'>
        .catagory_wraper{
            margin-top: 20px;
            background-color: rgb(119, 100, 100);
            border-radius: 10px;
        }
       .types_item{
           height: 30px;
           line-height: 30px;
           p{
               font: 13px '宋体';
               text-align: center;
               height: 30px;
               line-height: 30px;
               cursor: pointer;
           }
       }
</style>
