const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
	res.sendFile(__dirname+"/homepage.html");
});
app.post("/",function(req,res){
	var mName=req.body.yourName;
	var my_name=(mName.substring(0,1)).toUpperCase();
	var myName=(mName.substring(1,mName.length)).toLowerCase();
	my_name+=myName;
	var lName=req.body.loverName;
	var lover_name=(lName.substring(0,1)).toUpperCase();
	var loverName=(lName.substring(1,lName.length)).toLowerCase();
	lover_name+=loverName;
	var lovePercentage=Math.floor((Math.random()*100)+1);
	if(lovePercentage<40)
	{
		res.render("low",{myName:my_name,myLoverName:lover_name,percentage:lovePercentage});
	}
	else if(lovePercentage>40&&lovePercentage<70)
	{
		res.render("medium",{myName:my_name,myLoverName:lover_name,percentage:lovePercentage});
	}
	else
	{
		
		res.render("high",{myName:my_name,myLoverName:lover_name,percentage:lovePercentage});
	}
});

app.listen("3000",function(){
	console.log("server has started on 3000...");
});
