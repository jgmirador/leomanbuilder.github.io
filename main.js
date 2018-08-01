var menuToggle = true;

$('#toggle-menu').click(function() {
    if (menuToggle) {
        $('#menu').animate({
            height:"350px"
        }, 700, function() {
            menuToggle = false;
        })
    } else {
        $('#menu').animate({
            height:"0"
        }, 700, function() {
            menuToggle = true;
        })
    }
})