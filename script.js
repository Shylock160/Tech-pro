function myfunction(){
    var showhide = document.getElementById('nav-menu');
    if (showhide.style.display === "flex") {
        showhide.style.display = "none";
    }
    else{
        showhide.style.display = "flex";
    }
}