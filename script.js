var data_1 = {image : "1.jpg", name : "Uppalapati Sri", designation : "Software Engineering Student"};
var data_2 = {image : "2.jpg", name : "Sri", designation : "Software Developer"};
var isdata_1 = true;
var display_data ;
var changemypic = function(){
     if (isdata_1){
        display_data = data_2;
        isdata_1 = false;
     }
     else{
        display_data = data_1;
        isdata_2 = true;
     }
     document.getElementById("myimage").src = display_data.image;
     document.getElementById("myname").innerHTML = display_data.name;
     document.getElementById("mydesig").innerHTML = display_data.designation;

}