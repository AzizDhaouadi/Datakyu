$(".cta").click( () => {
    $("html,body").animate({
        scrollTop: $("#contactSection").offset().top}, "slow");
    });