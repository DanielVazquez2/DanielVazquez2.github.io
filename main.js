function newImage(){
    var image = document.getElementById("headlines");
    console.log(image);
    if (image.src.match("headline2")){
        image.src = "headline.jpg"
    }else{
        image.src = "headline2.png"
    }
}
function Hello(){
    alert("Hey, thank you for visiting my website, I hope you like this news.");
}