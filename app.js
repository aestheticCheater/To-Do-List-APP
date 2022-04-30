const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var items = [];
app.set('view engine', 'ejs'); // required to view in views folder the engine list.ejs

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // used to find our css style in public folder to load it up on the server, because it needs to be loaded up externally to be seen on server

app.get("/", function(req, res){ // first load up our homepage
var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day = today.toLocaleDateString("en-US", options);




res.render("list", {dayOfWeek: day, newListItems: items}); //  we render our list.ejs passing in two variables,
                                                           // newListItems is set to equal the items array which starts off containing three strings
});                                                        // then it gets  passed into the list.ejs under variable newListItems
app.post("/", function(req, res){
   var item = req.body.newItem;
   if(item !== ""){
   items.push(item); }
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000");
});
