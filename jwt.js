//导入express模块
const express = require('express');
//创建服务器
const app = express();

//导入JWT相关的包
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

//允许跨域资源共享
const cors = require('cors');
app.use(cors())


//解析post表单数据中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

//定义secret密钥，建议将密钥命名为secretKey

const secretKey = 'bug No1 ^-^';
//注册将jwt 字符串解析还原成JSON 对象的中间件
app.use(expressJwt({secret:secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))

//登录接口
app.post('/api/login',(req,res)=>{
  const userinfo = req.body
if(userinfo.username !== 'admin' || userinfo.password !== '000000'){
  return res.send({
    status:400,
    message:'登陆失败'
  })
}

  res.send({
    status:200,
    message:'登陆成功',
    token:jwt.sign({username:userinfo.username},secretKey,{expiresIn:'30s'})
  })



});

app.get('/admin/getinfo',(req,res)=>{
  console.log(req.user)
  res.send({
    status:200,
    message:"获取用户信息成功",
    data:req.user
  })
})

//全局的错误处理的中间件

app.use((err,req,res,next)=>{
  if(err.name === 'UnauthorizedError'){
    res.send({
      status:401,
      message:'无效token'
    })

  }
  res.send({
    status:500,
    message:'未知错误'
  })
})

app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1:80')
  })
