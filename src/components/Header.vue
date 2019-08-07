//个人博客头部导航栏
<template>
  <div class="header_wraper">
    <div class="header_inner w960">
      <!-- <div class="logo">
                      <i>myblog</i>
      </div>-->
      <div class="Heaader_navbar">
        <el-tooltip class="item" effect="dark" v-for="(links,index) in routers" :key="index">
          <router-link :to=links.value>{{links.name}}</router-link>
        </el-tooltip>

        <el-tooltip class="item" effect="dark">
          <el-button class="btss" @click="gowrite">写博文</el-button>
        </el-tooltip>
      </div>
    </div>
    <div class="haveuser" v-if="$store.state.userinfo">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="$store.state.userinfo.avatar" class="avaimg" alt />
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="xiala">
          <el-dropdown-item>
            <router-link to="/index/center">个人中心</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="loginout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      routers: [
        { name: "首页", value: "/index/home" },
        { name: "博文", value: "/index/bloglist" },
        { name: "书屋", value: "/index/book" },
        { name: "交流", value: "/index/chartroom" },
        { name: "留言", value: "/index/exchange" },
        { name: "图表库", value: "/index/screen" }
      ]
    };
  },
  methods: {
    gowrite() {
      if (this.$store.state.userinfo) {
        this.$router.push("/index/write");
      } else {
        if (this.$route.name == "login") {
          this.$message.info("登陆才阔以写😚");
        } else {
          this.$message.info("未登录不能写博文哦！先去登陆吧😋");
          setTimeout(() => {
            this.$router.push("/index/login");
          }, 2000);
        }
      }
    },
    //退出登录
    loginout() {
      this.$axios.get("/user/logout").then(res => {
        if (res.code == 200) {
          this.$message.info(res.msg);
          this.$store.commit("CHANGEUSERINFO", null);
          setTimeout(() => {
            this.$router.push("/index/login");
          }, 500);
        }
      });
    }
  }
};
</script>
<style scoped lang ='scss'>
.logo {
  font-size: 25px;
  color: #b8b3b3;

  top: 0;
  left: 0;
}
.header_wraper {
  position: relative;
  height: 60px;
  line-height: 60px;
  box-shadow: 0 3px 4px rgba($color: #d0fc6a, $alpha: 0.6);
  color: #524040;
  /* background-color:#fff; */
}
.haveuser {
  position: absolute;
  right: 10px;
  top: 0;
}
.header_inner {
  display: flex;
  text-align: center;
  margin: 0 auto;
  height: 60px;
  justify-content: space-around;
}
.Heaader_navbar {
  left: 100px;
  a {
    color: rgb(156, 129, 129);
  }
  .item {
    margin: 0 5px;
  }
  .router-link-exact-active {
    color: rgb(160, 138, 138);
  }
  .router-link-active {
    font-weight: 500;
    color: #ecf011;
  }
}
.btss {
  background-color: #090422;
  border: none;
  color: #9c8181;
}
.avaimg {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  vertical-align: middle;
}
.el-dropdown-link {
  display: block;
}
.xiala {
  background-color: rgb(53, 17, 17);
  border: none;
  color: #fff;
}
</style>
