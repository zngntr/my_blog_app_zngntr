var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// temprary data for exercise ---------
var contents = [
            {name: "Halil Zengin", image: "https://www.theaccessgroup.com/media/17985/blog-intro.jpg"},
            {name: "Furkan Yıldız", image: "https://image.freepik.com/free-vector/blogging-background-with-elements-in-flat-design_23-2147559818.jpg"},
            {name: "Betty Blur", image: "https://congdongdigitalmarketing.com/wp-content/uploads/2017/09/Content-viral-696x374.jpg"}
        ];
//--------------------------------------        
        
// landing page
app.get("/", function(req, res){
    res.render("landing");
});


// all contents which has been posted
app.get("/all_contents", function(req, res){
    res.render("all_contents", {contents: contents});
});

// new content POST route
app.post("/all_contents", function(req, res){
   //get data from form and add to contents array
    var name =  req.body.name;
    var image = req.body.image;
    var newContent = {name: name, image: image};
    contents.push(newContent);
    
   //redirect to contents page
   res.redirect("/all_contents");
});

//new content create route
app.get("/all_contents/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running.."); 
}); 