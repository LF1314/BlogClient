# blogclient

> BlogClient

#### 新加功能图表库
    预览编辑

#### 主要功能

    文章的添加
    支持使用 Markdown 编辑与实时预览
    支持代码高亮
    给文章添加标签
    支持用户注册登录
    前后端书籍的阅读
    支持评论
    关注
    其他功能自己去发现吧😂

vue+node.js+mongoose + express +
[element-ui](http://element.eleme.io/#/)
#### 前端

    Vue.js
    vue-cli
    vue-router
    vue-resource
    element-ui
    marked
    vue-echarts
    echarts
    vue-codemirror
    chart_wordcloud
    

### 后端

    Node.js
    Express
    cheerio 模块
    request 模块
    Mongoose

#### 项目目录
```
| app.js              后端入口
| index.html          入口页面
| .babelrc            babel配置
| .gitignore          git配置
| package.json
| webpack.config.js   webpack配置
|
|-dist                vue打包生成的文件
|
|-node_modules        模块
|
|-server              后端
    | auth.js         登陆验证
    | control         api路由
    | model.js        数据模型
 __ | router-index.js 一级路由
|
|-src               前端
    |-static       静态资源
    |-components    组件
    | App.vue       
    | views         前端页面        
    | main.js       前端入口
```

前端页面目录

```
|--首页
|--博文 
|--书屋 
    |->书籍列表
    |->书籍详情
|--交流
|--留言-->
|--写博文
     |-->支持markdown
|--阅读博文
|--登陆/注册
|--个人中心
    |->个人信息
    |->关注列表
    |->粉丝列表
    |->博文列表
```
#### run

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

刚写 还只能抽空写功能 还在完善中 别给我玩坏了还得删库

页面效果

index/home
![](https://img.mukewang.com/5be3af0a0001b1ec16490937.png)

index/bloglist

![](https://img.mukewang.com/5be193c200017f0114770771.png)

index/book
![](https://img.mukewang.com/5be193e000010dd715310742.png)

index/chatroom
![](https://img.mukewang.com/5be193fd0001554615560753.png)


index/write
![](https://img.mukewang.com/5be3aee30001225315380846.png)

index/blogdetail
![](https://img.mukewang.com/5be19450000142a314560763.png)



[online](http://47.100.6.121:1996)

[项目地址](https://github.com/LF1314/blog-client)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
