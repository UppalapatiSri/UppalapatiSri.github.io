var data_1 = {image : "IMG-5640.jpg", name : "Uppalapati Sri", designation : "Software Engineering Student"};
var data_2 = {image : "IMG-5672.jpg", name : "Sri", designation : "Software Developer"};
var isdata_1 = true;
var display_data ;
var changemypic = function(){
     if (isdata_1){
        display_data = data_2;
        data_1 = false;
     }
     else{
        display_data = data_1;
        data_2 = false;
     }
     document.getElementById("myimage").src = display_data.image;
}