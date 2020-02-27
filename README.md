# 项目介绍
* 前后端分离的SPA应用
* gshop-server  项目后台文件

## 技术参考
### 前台
* vue
* vue-router
* vuex
* swiper
* axios
* mint-ui
* mockjs

### 后台
* node
* mongodb

## 项目运行
1. 安装mongoDB数据库并成功启动

* MongoDB配置环境变量(Mac电脑)
```js
export PATH=/usr/local/mongodb/bin:$PATH
```
启动mongodb服务,启动后台项目前要确保服务启动
```js
sudo mongod 

// 启动成功
2020-02-27T10:59:16.281+0800 I NETWORK  [initandlisten] waiting for connections on port 27017
```

2. 启动后台项目
安装依赖
```js
cd ~/demo_gshop/gshop-client/gshop-server
npm install
```
* 启动前查看本地MongoDB地址并进行更改
```js
//  --db/models.js
mongoose.connect('mongodb://localhost:27017/guigu_zhipin')
```
* 发送短信验证码需要注册账号百度[容联云通讯]
* 注册登录以后,控制台首页有开发者主账号,复制四条秘钥进行修改
```js
// --util/sms_util.js
var ACCOUNT_SID = '填入你的SID';
var AUTH_TOKEN = '填入你的TOKEN';
var Rest_URL = 'https://app.cloopen.com:8883';
var AppID = '8aaf0708697b6beb016985281c8103f4';
```
* 启动
```js
npm start

server running on port 3000

数据库连接成功!
```
数据库连接成功端口号3000

修改默认端口号在bin/www文件
```js
// --bin/www
var port = normalizePort(process.env.PORT || '3000');
```
3. 启动前台项目
安装依赖(有提交过依赖到远程仓库，最好还是安装一下)
```js
npm insatll
npm run dev // 启动
Your application is running here: http://localhost:8080
```
* config/index.js可以修改默认8080端口

* 遇到过一个问题
第一次提交代码到远程仓库后webpack.dev.conf.js中的入口文件
index.html不知道什么原因变成了router.js.html
导致npm run dev一直出错，找了很久最后对比正确的配置文件才找出错误

