var exp = require('express');
const router = exp.Router();   
var bodyparser = require('body-parser');
var books = require('../model/booksmodel');
const path = require('path');


router.use(bodyparser.urlencoded({extended:true}));

var multer = require('multer'); //module to upload files
 
var storage =   multer.diskStorage({  
    destination: (req, file, callback)=>{  
      callback(null, './public/images');  
    },  
    filename: (req, file, callback)=>{ 
        
      callback(null, file.originalname);  
    }  
  });  
  
var upload = multer({ storage : storage}).single('file1');  

router.get("/",(req,res)=>{
    books.find({},(err,result)=>{
        if (err) throw err;
        else
            res.send(result);
    }) 
})

/*router.get("/add",(req,res)=>{
    res.render(
        "addbook",
        {
            pageTitle:"Library",
            nav:[
                {link:"/books", title:"Books"}, 
                {link:"/authors", title:"Authors"},
                {link:"/books/add", title:"Add Books"},
                {link:"/books/update", title:"Manage Books"},
                {link:"/logout", title:"Logout"}
            ]
        }
    ); 
})*/

router.post("/add",upload, (req,res)=>{
    if(req.body.title!=undefined ){
    var b1 = new books();
    b1.bookTitle = req.body.title;
    b1.author = req.body.author;
    b1.genre = req.body.genre;
    b1.description = req.body.description;
    b1.price = req.body.price;
    b1.urlToImage = req.body.image;
    
    console.log(req.body.image); 
    b1.save((err)=>{
        if (err) throw err;
        else{
            console.log("Book added");
            res.send({msg:"Added"})
        }
    })
}
})

router.get("/view/:img",(req,res)=>{        //image controller
    res.sendFile(path.join(__dirname+"../../public/images/"+req.params.img))
})

router.get("/pageupdate",(req,res)=>{
    books.find({},(err,result)=>{
        if (err) throw err;
        else
            res.send(result);
    }) 
})

router.get("/update/:bid",(req,res)=>{
    books.find({bookTitle:req.params.bid},(err,result)=>{
        if (err) throw err;
        else res.send(result);
    })
})

router.post("/edit",(req,res)=>{
    console.log(req.body.bookTitle);
   // console.log(req);
    books.updateOne({bookTitle:req.body.bookTitle} ,{$set:{
        bookTitle:req.body.bookTitle,
        author : req.body.author,
        genre : req.body.genre,
        description : req.body.description,
        price : req.body.price,
        
    }}, (err,result)=>{
        if (err) throw err;
        else{
            
                    res.send(result)
            
        }
    }) 
})

router.get("/delete/:bid",(req,res)=>{
    books.deleteOne({_id:req.params.bid},(err,result)=>{
        if (err) throw err;
        else
        {
            books.find({},(err,result)=>{
                if(err) throw err;
                else
                    res.send({msg:"Deleted"})
            })
        }
    })
})

router.get("/single/:title",(req,res)=>{
    console.log(req.params.title);
    
    books.find({bookTitle:req.params.title},(err,result)=>{
        if (err) throw err;
        else{
            console.log(result);
            res.send(result);
        }
    })
})


module.exports=router;