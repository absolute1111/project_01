const express = require('express');
const app = express();

const session = require('express-session');


app.use(session({
    secret:'runingbug',
    resave:false,
    saveUninitialized:true
}))
// 托管静态页面
app.use(express.static('./pages'))
// 解析 POST 提交过来的表单数据
app.use(express.urlencoded({ extended: false }))

app.post('/api/login',(req,res) =>{
    if(req.body.username !== 'admin' || req.body.password !== '000000'){
        return res.send({status:1,msg:'登录失败'});
    }

    req.session.user = req.body;
    req.session.islogin = true;
    res.send({status:0,msg:'登陆成功'})
});

app.get('/api/username',(req,res) =>{
    if(!req.session.islogin){
        return res.send({status:1,msg:'fail'});
    }

    res.send({status:0,msg:'success',username:req.session.user.username})
});

app.post('/api/logout',(req,res) =>{
    req.session.destroy()

    res.send({status:0,msg:'退出成功'})
});

app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1:80')
  })
