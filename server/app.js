
const express = require('express');
const app = express();
//app.set("view engine","ejs");  
//app.set("views","./src/views");  
//const path = require('path');
var bodyparser = require('body-parser');
app.use(bodyparser.json());
var bookrouter = require('./routes/booksrouter');
var authorrouter = require('./routes/authorsrouter');
var mongo = require('mongoose');
var url = "mongodb+srv://ann:ann@cluster0-vctj5.mongodb.net/library?retryWrites=true&w=majority";
var user = require('./model/usersmodel');
mongo.connect(url, {useNewUrlParser:true}, (err)=>{
    if (err) throw err;
    else console.log("Database connected");
})
app.use(bodyparser.urlencoded({extended:true}));

//app.use(express.static(path.join(__dirname+"/public")));   

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//login as home
app.get("/",(req,res)=>{
    res.render(              
        "login",
        {
            pageTitle:"Library",
            nav:[
                {link:"/", title:"Home"}
            ]
        }
    ); 
})

//login action
app.post("/login",(req,res)=>{
    //console.log(req.body.username);
    user.find({username:req.body.username,password:req.body.password},(err,result)=>{
        if (err) throw err;
        else{
            console.log(result.length); 
            if(result.length!=0)
            res.send({msg:"Success"});
                
            else
            res.send({msg:"Failed"});
        }
    })
    
})




//signup action
app.post("/register",(req,res)=>{
    var u1 = new user();
    u1.name = req.body.name;
    u1.email = req.body.email;
    u1.username = req.body.username;
    u1.password = req.body.password;
    u1.save((err)=>{
        if (err) throw err;
        else{
            console.log("Data added");
            //res.redirect("/");
            res.send({msg:"Success"});
        }
    })
})

app.get("/logout",(req,res)=>{
    res.redirect("/");
})


app.use("/books", bookrouter);
app.use("/authors", authorrouter)



app.listen(process.env.PORT || 8000,()=>{
    console.log("Listening");
})
