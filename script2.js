var userinfo = {name : "", image : "", username : ""};

var changemypic = function(){
    fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>{ 
        userinfo.name = data.results[0].name.first;
        userinfo.image = data.results[0].picture.large;
        userinfo.username = data.results[0].login.username;
        document.getElementById("myimage").src = userinfo.image;
        document.getElementById("myname").innerHTML = userinfo.name;
        document.getElementById("mydesig").innerHTML = userinfo.username;
    });
    
    
}