$(document).ready(function () {
    // WOW.js
    new WOW().init();

    // navbar dropdown
    $('.nav-dropdown').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().slideToggle();
        // $(this).parent().siblings().find('nav-dropdown-ul').slideUp();
    });

    // 手機板 展開/收合 導覽列
    $('.hamburger-menu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('show-menu');
    });

    // swiper
    // const swiper = new Swiper('.swiper', {
    //     direction: 'horizontal',
    //     loop: true,
    //     speed: 3000,
    //     autoplay: {
    //         delay: 2000,
    //     },
    //     effect: 'fade',
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: "bullets",
    //         clickable: true,
    //     },
    // });

    // owl-carousel
    $(".owl-carousel").owlCarousel({
        center: true,
        loop:true,
        margin: 5,
        autoWidth:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        // items:5
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // }
    });

    // totop
    function showTotop() { 
        // console.log($(this).scrollTop());
        // 向下滾動300px才顯示
        if ( $(this).scrollTop() > 300 ) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    }
    $(window).scroll(showTotop);

    $('.totop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 1500);
    });



    $('.registration h2').addClass('plusIcon');
    $('.registration h2').click(function () { 
        $(this).next().slideToggle(1000);
        $(this).toggleClass('plusIcon minusIcon');
    });
});