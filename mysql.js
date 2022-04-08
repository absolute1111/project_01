const mysql = require('mysql');

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'new_db_01'
});


//测试mysql 是否正常工作
// db.query('SELECT 1',(err,results) => {

// if(err) return console.log(err.message)

// console.log(results)

// });

//查询数据 查询 users 表所有数据

// db.query('SELECT * FROM users',(err,results) => {

// if(err) return console.log(err.message)

// console.log(results)

// });

//插入数据 新增数据到 users 表

// const user = {username:'Spider-Man',password:'admin999'}

// const sqlStr = 'insert into users (username,password) values(?,?)'

// db.query(sqlStr,[user.username,user.password],(err,results) => {

// if(err) return console.log(err.message)

// if(results.affectedRows === 1){
//     console.log('输入数据成功')
// } 

// console.log(results)

// });

//快速插入

// const user = {username:'Spider-Man2',password:'admin899'}

// const sqlStr = 'insert into users set ?'

// db.query(sqlStr,user,(err,results) => {

// if(err) return console.log(err.message)

// if(results.affectedRows === 1){
//     console.log('输入数据成功')
// } 



// });


// 更新数据

// const user = {id:13,username:'aaa',password:'000000'}
// const sqlStr = 'update users set username=?,password=? where id=?'
// db.query(sqlStr,[user.username,user.password,user.id],(err,results) => {

// if(err) return console.log(err.message)

// if(results.affectedRows === 1){
//     console.log('更新数据成功')
// } 

// console.log(results)

// });

//快速更新数据

// const user = {id:10,username:'aaaa',password:'000000'}
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr,[user,user.id],(err,results) => {

// if(err) return console.log(err.message)

// if(results.affectedRows === 1){
//     console.log('更新数据成功')
// } 

// console.log(results)

// });

// 删除数据

// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr,13,(err,results) => {

// if(err) return console.log(err.message)

// if(results.affectedRows === 1){
//     console.log('删除数据成功')
// } 

// console.log(results)

// });

//标记删除（假删除）

const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr,[1,10],(err,results) => {

if(err) return console.log(err.message)

if(results.affectedRows === 1){
    console.log('删除数据成功')
} 

console.log(results)

});









