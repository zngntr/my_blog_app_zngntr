var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/all_contents", function(req, res){
    var contents = [
            {name: "Halil Zengin", image: "https://www.theaccessgroup.com/media/17985/blog-intro.jpg"},
            {name: "Furkan Yıldız", image: "https://image.freepik.com/free-vector/blogging-background-with-elements-in-flat-design_23-2147559818.jpg"},
            {name: "Betty Blur", image: "https://congdongdigitalmarketing.com/wp-content/uploads/2017/09/Content-viral-696x374.jpg"}
        ];
   res.render("all_contents", {contents: contents});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running.."); 
});