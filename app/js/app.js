var green = "#5db442";

function changeCssButton(e, state) {
    if (state){
        $(e).css('backgroundColor', '#fff');
        $(e).css('color', green);
    } else {
        $(e).css('backgroundColor', green);
        $(e).css('color', '#fff');
    }
}

$(document).ready(function () {
    
    // Горизонтальне меню
    $(".mnu-button").click(function () {
        $(".top-menu ul").slideToggle();
    });
      
    
    $("#left-trigger").click(function () {
        if ($("#right-trigger").hasClass('active-trigger')) {
            $(this).addClass('active-trigger');
            $("#right-trigger").removeClass('active-trigger');
            changeCssButton(this, false);
            changeCssButton("#right-trigger", true);
        } 
    });
                             
    $("#right-trigger").click(function () {
        if ($("#left-trigger").hasClass('active-trigger')) {
            $(this).addClass('active-trigger');
            $("#left-trigger").removeClass('active-trigger');
            changeCssButton(this, false);
            changeCssButton("#left-trigger", true);
        }
    });
  
        
    $("#offer-title-1").click(function () {

        if ($(this).hasClass('active-offer')) {
            $(this).removeClass('active-offer');
            changeCssButton(this, true);
        } else {
            $(this).addClass('active-offer');
            changeCssButton(this, false);
        }

        $(".offer1").slideToggle();

        if ($('#offer-title-2').hasClass('active-offer')) {
            $('#offer-title-2').removeClass('active-offer');
            $(".offer2").slideToggle();
            changeCssButton('#offer-title-2', true);
        }

        if ($('#offer-title-3').hasClass('active-offer')) {
            $('#offer-title-3').removeClass('active-offer');
            $(".offer3").slideToggle();
            changeCssButton('#offer-title-3', true);
        }

    });

    $("#offer-title-2").click(function () {

        // $(.offer-title-1).stop().animate({ backgroundColor: "#5db442"}, 400);

        if ($(this).hasClass('active-offer')) {
            $(this).removeClass('active-offer');
            changeCssButton(this, true);
        } else {
            $(this).addClass('active-offer');
            changeCssButton(this, false);
        }

        $(".offer2").slideToggle();

        if ($('#offer-title-1').hasClass('active-offer')) {
            $('#offer-title-1').removeClass('active-offer');
            $(".offer1").slideToggle();
            changeCssButton('#offer-title-1', true);
        }

        if ($('#offer-title-3').hasClass('active-offer')) {
            $('#offer-title-3').removeClass('active-offer');
            $(".offer3").slideToggle();
            changeCssButton('#offer-title-3', true);
        }

    });

    $("#offer-title-3").click(function () {

        // $(.offer-title-1).stop().animate({ backgroundColor: "#5db442"}, 400);

        if ($(this).hasClass('active-offer')) {
            $(this).removeClass('active-offer');
            changeCssButton(this, true);
        } else {
            $(this).addClass('active-offer');
            changeCssButton(this, false);
        }

        $(".offer3").slideToggle();

        if ($('#offer-title-1').hasClass('active-offer')) {
            $('#offer-title-1').removeClass('active-offer');
            $(".offer1").slideToggle();
            changeCssButton('#offer-title-1', true);
        }

        if ($('#offer-title-2').hasClass('active-offer')) {
            $('#offer-title-2').removeClass('active-offer');
            $(".offer2").slideToggle();
            changeCssButton('#offer-title-2', true);
        }

    });
});