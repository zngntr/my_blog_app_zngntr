var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect('mongodb://localhost:27017/forum_db', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//>>------------ SCHEMA SETUP------------

var blogSchema = new mongoose.Schema({
   name: String,
   image: String
});

//<<-------------------------------------

var BlogContent = mongoose.model("BlogContent", blogSchema);

/*BlogContent.create(
      {
          name: "Burcu Adıvar", 
          image: "https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg",
      },
      function(err, blog){
       if(err){
           console.log(err);
       } else {
           console.log("-------Blog oluşturuldu-----------");
           console.log(blog);
       }
     });*/


// >>------------LANDING PAGE------------

app.get("/", function(req, res){
    res.render("landing");
});

//<<-------------------------------------


// >>------------ SHOW PAGE -------------

app.get("/all_contents", function(req, res){
    //Get all blogs from DB
    BlogContent.find({}, function(err, allContents){
        if(err){
            console.log(err);
        } else {
            res.render("all_contents", {contents: allContents});
        }
    });
});

//<<------------------------------------


//>>------ NEW CONTENT POST ROUTE-------

app.post("/all_contents", function(req, res){
   //get data from form and add to contents array
    var name =  req.body.name;
    var image = req.body.image;
    var newContent = {name: name, image: image};
    
    // create new content and save to DB
    BlogContent.create(newContent, function(err, newlyCreated){
        if(err){
            console.log(err); // will be showing errors on user interface in soon
        } else {
            //redirect to contents page
            res.redirect("/all_contents");
        }
    });
});

//<<-------------------------------------

//>>--- NEW CONTENT CREATING SHOW ROUTE--

app.get("/all_contents/new", function(req, res) {
    res.render("new.ejs");
});

//<<-------------------------------------

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running.."); 
}); 