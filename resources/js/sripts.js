
$(document).ready(function () {
    "use strict";
    new Waypoint({
        element: document.getElementsByClassName('js--section--features')[0],
        handler: function(direction) {
            if (direction === "down") {
                $('nav').addClass("sticky");
                /*$('nav').addClass('sticky');*/
            } else {
                $('nav').removeClass('sticky');
            }
        },
        offset: 60
    });

    /*js--scroll--to--plans*/

    $('.js--scroll--to--plans').click(function () {
       $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000);
    });
    $('.js--scroll--to--start').click(function () {
        $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000);
    });

    /* scroll for navigation */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    new Waypoint({
        element: document.getElementsByClassName('js--wp-1')[0],
        handler: function(direction) {
            $('.js--wp-1').addClass("animated fadeIn");
        },
        offset: "50%"
    });

    new Waypoint({
        element: document.getElementsByClassName('js--wp-2')[0],
        handler: function(direction) {
            $('.js--wp-2').addClass("animated fadeInUp");
        },
        offset: "50%"
    });

    new Waypoint({
        element: document.getElementsByClassName('js--wp-3')[0],
        handler: function(direction) {
            $('.js--wp-3').addClass("animated fadeIn");
        },
        offset: "50%"
    });

    new Waypoint({
        element: document.getElementsByClassName('js--wp-4')[0],
        handler: function(direction) {
            $('.js--wp-4').addClass("animated pulse");
        },
        offset: "50%"
    });
});
