$(document).ready(function() {

    
    
// Rozwijane menu dla telefonów
    
    var menuLoader = $(".menu");
    
    menuLoader.on("click", function() {
        var dropdownMenu = $(".dropdownMenu");
        console.log("works");
        dropdownMenu.toggleClass("show hide");
        
    });
    
    
    
    
    
// Przewinięcie strony dla przycisku z headera 
    
    $(".buttonHexScroll").click(function() {
        $('html, body').animate({
            scrollTop: $("nav").offset().top
        }, 1000);
    });
    
    

    
});