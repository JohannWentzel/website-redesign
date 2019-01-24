var isDarkMode = false;

var instance = new TypeIt('#typeString', {
    strings: ["researcher.", "VR enthusiast.", "mobile developer.", "game developer.", "web developer.", "web designer.", "dark mode enthusiast.",],
    //-- Other options...
    breakLines: false,
    loop: true,
    lifeLike: true,
    nextStringDelay: 4000,
});

particlesJS.load('particles', './scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

function toggleDarkMode(){
    isDarkMode = !isDarkMode;
    console.log("Dark mode toggled to " + isDarkMode);
    if (isDarkMode){
        $("#darkmode-icon").html("<i class='fas fa-moon'></i>");
        $("body").css("background-color","#14141C");
        $("section").find("p, h1, h2, h3, h4, h5, .btn").css("color", "white");
        $("section").find(".card").css("background-color","#14141C");
        $("section").find(".darken").css("background-color","#14141C");
        $("section").find(".card").addClass("border-light");
        $("section").find(".btn").css("border-color","white");
        $("section").find("p a").css("color","#77D2FF");
        $(".separator, #particles").css("background-color","#000008");

    }
    else {
        $("#darkmode-icon").html("<i class='far fa-moon'></i>");
        $("body").css("background-color","");
        $("section").find("p, h1, h2, h3, h4, h5, .btn").css("color", "");
        $("section").find(".card").css("background-color","");
        $("section").find(".darken").css("background-color","");
        $("section").find(".card").removeClass("border-light");
        $("section").find(".btn").css("border-color","");
        $("section").find("p a").css("color","");
        $(".separator, #particles").css("background-color","");
    }
    

}

$( document ).ready(function(){
    $('#darkmode-icon').click(function(){
        toggleDarkMode();
    })

    $("body, p, h1, h2, h3, h4, h5, a, .btn, .separator, .darken, section, #particles").addClass("animated-transition");
})