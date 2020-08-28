var movie = document.querySelector(".movieinput");
var rate = document.querySelector(".rateinput");
var value_put = document.querySelector("span");
var movie_ul = document.querySelector("#movie");
var rate_ul = document.querySelector("#rate");



value_put.addEventListener("click",function(){
        var value1= movie.value;
        console.log(value1);
        var value2 = rate.value;
        var para = document.createElement("li");
        var node1 = document.createTextNode(value1);
        para.appendChild(node1);
        movie_ul.appendChild(para);
        var para2 = document.createElement("li");
        var node2 = document.createTextNode(value2);
        para2.appendChild(node2);
        rate_ul.appendChild(para2);
});
var span = document.querySelectorAll("span");
span.addEventListener("click",function(event){
    this.parent().remove();
    event.stopPropogation();   
});     