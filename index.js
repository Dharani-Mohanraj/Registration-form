const express=require("express")
const cors=require("cors")
const db=require("mysql")
const bodyParser = require("body-parser")
const connect=express()
connect.use(cors())
connect.use(bodyParser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyParser.urlencoded({extended:true}))
let databaseconnect=db.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Dharani@2003",
    database:"employee"
})
databaseconnect.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
    
    connect.post('/register',(request,response)=>{
        let {fname,lname,email,phonenumber,password}=request.body
        let sql='insert into register (fname,lname,phonenumber,email,username,password)values(?,?,?,?,?,?)'
        databaseconnect.query(sql,[fname,lname,phonenumber,email,email,password],(error,result)=>{
            if(error){
                response.send({"status":"error"})
                console.log(error)
            }
            else{
                response.send({"status":"success"})
            }
        })
    })
    connect.post('/log',(request,response)=>{
        let {username,password}=request.body
        let sql='select * from register where username=?'
        databaseconnect.query(sql,[username],(error,result)=>{
            if(error){
                response.send({"status":"empty set"})
            }
            else if(result.length>0){
               let dbusername=result[0].username
               let dbpassword=result[0].password
               let s_no=result[0].s_no
               if(dbusername===username && dbpassword===password){
                response.send({"status":"success", "s_no":s_no})
               }
               else{
                response.send({"status":"invalid_user"})
               }
            }
            else{
                response.send({"status":"error"})
            }
        })
    })
    connect.listen(3002,()=>{
        console.log("your database running successfully")
    })
})