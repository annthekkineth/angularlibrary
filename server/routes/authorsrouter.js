var express=require('express')
const router=express.Router();

var autharr=[
    {
        name:"Agatha Christie",
        books:"Crooked house, And there were none",
        img:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Agatha_Christie_3.jpg",
        about:"Born in Torquay in 1890, Agatha Christie became, and remains, the best-selling novelist of all time. She is best known for her 66 detective novels and 14 short story collections, as well as the world’s longest-running play – The Mousetrap. Her books have sold over a billion copies in the English language and a billion in translation."
    },
    {
        name:"Chetan Bhagat",
        books:"Half Girlfriend, One Indian Girl",
        img:"https://www.famousauthors.org/famous-authors/chetan-bhagat.jpg",
        about:"Chetan Baghat, a rising star in the contemporary modern Indian literature, is a multitalented personality. He is a novelist, columnist, public speaker and a screenplay writer. His notable works include Five Point Someone, The 3 Mistakes of My Life and 2 States.Most of his literary works address the issues related to Indian youth and their aspirations which earned Baghat status of the youth icon."
    },
    {
        name:"Charles dickens",
        books:"Oliver Twist, A Tale of Two Cities",
        img:"https://m.media-amazon.com/images/M/MV5BNGQ1NGQxNjMtNGQzMi00MzU1LTgyOGUtN2ZhNTYwZDI1Mzc3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg",
        about:"Charles Dickens was an English writer born in 1812 in Portsmouth, England. He was a British novelist, journalist, editor, illustrator and social commentator who wrote such beloved classic novels as Oliver Twist, A Christmas Carol, Nicholas Nickleby, David Copperfield, A Tale of Two Cities and Great Expectations."
    },
    {
        name:"Robin Cook",
        books:"Vector, Death Benefit ",
        img:"https://ichef.bbci.co.uk/images/ic/640x360/p01gzycg.jpg",
        about:"Doctor and author Robin Cook is widely credited with introducing the word `medical' to the thriller genre, and decades after the publication of his 1977 breakthrough novel, Coma, he continues to dominate the category he created. Cook has successfully combined medical fact with fiction to produce over thirty international bestsellers, including Outbreak (1987), Terminal (1993), Contagion (1996), Chromosome 6 (1997), Foreign Body (2008), Intervention (2010) and Cure (2011)."  
    },
    {
        name:"Ajay Pandey",
        books:"Her Last Wish, A Girl to Remember ",
        img:"https://images-na.ssl-images-amazon.com/images/I/81ZUl-sVjQL._US230_.jpg",
        about:"Ajay K Pandey is currently working with Cognizant, Pune. Although he grew up with a dream of becoming a teacher, destiny landed him in the IT field. His debut novel You Are The Best Wife was based on his life events and went on to become a bestseller soon after its release."  
    },
    
    {
        name:"Daniel Chidiac",
        books:"Who says you can't? You do. ",
        img:"https://danielchidiac.com/wp-content/uploads/2017/12/author.jpg",
        about:"Daniel Chidiac is a writer from Melbourne, Australia. He went on a journey of self-discovery after becoming awakened to his power over his own life and developed this program to share with others what he discovered inside himself. Who Says You Can’t? You Do was first published in 2012 and became an Amazon bestseller in eight different countries."  
    }
]
 
router.get('/',function(req,res){
    res.send(autharr);
})

router.get('/:name',function(req,res){
    var name=req.params.name
    //console.log(name)
    //console.log(autharr[id].name)
    for(var i=0;i<autharr.length;i++){
        if(autharr[i].name == name){
            //console.log(autharr[i].books);
            res.send(autharr[i]);
        }
    }
    
})



module.exports=router;