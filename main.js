document.getElementById('toggle-menu').onclick = function() {
    var menuToggle = document.getElementById('menu')
    
    if (document.getElementById('menu').style.height == 0 || document.getElementById('menu').style.height == "0px") {
        document.getElementById('menu').style.height = "350px";
        document.getElementById('menu').style.transition = "1s";
    } else {
        document.getElementById('menu').style.height = 0;
    }
}