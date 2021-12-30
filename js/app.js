$(document).ready(function () {

    let header = $('.header');
    let scrollOffset = 0;

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= 20) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    });

    $('.team__slider').slick({
        nextArrow: '<button class="click__arrow next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2" stroke="#000000" stroke-width="4" stroke-opacity="0.5"  stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        prevArrow: '<button class="click__arrow prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2" stroke="#000000" stroke-width="4" stroke-opacity="0.5"  stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        infinite: false,
        speed: 300,
    });

    var port = function () {
        $('.portfolio__block').on('click', function () {
            $(this).toggleClass('active');
        });
    };
    $(document).ready(port)

    $('.burger').on('click', function () {

        $(this).toggleClass('burger--active');
        $('.header__list').toggleClass('active');
        $('.header__list-box').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    $('.header__list-box').on('click', function () {

        $('.burger').removeClass('burger--active');
        $('.header__list').removeClass('active');
        $('.header__list-box').removeClass('active');
        $('body').removeClass('no-scroll');

    });

    $('.header__list-link').on('click', function () {

        $('.burger').removeClass('burger--active');
        $('.header__list').removeClass('active');
        $('.header__list-box').removeClass('active');
        $('body').removeClass('no-scroll');
    });

    $('.task__accordion-title').on('click', function () {
        $(this).next('.task__accordion-text').slideToggle();
        $(this).toggleClass('active');
    });





    /* modal */

    const modalIntro = $('[data-intro]');
    const modalPortfolio = $('[data-portfolio]');
    const modalClose = $('[data-close]');

    modalIntro.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalId = $this.data('intro');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');
        $('.modal__portfolio-slider').slick({
            nextArrow: '<button class="click__arrow next"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2" stroke="#000000" stroke-width="4" stroke-opacity="0.5"  stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            prevArrow: '<button class="click__arrow prev"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2" stroke="#000000" stroke-width="4" stroke-opacity="0.5"  stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            slidesToShow: 1,
            infinite: false,
            speed: 300,
        });
    });


    modalClose.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('.modal').on('click', function (event) {
        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('.modal__content').on('click', function (event) {
        event.stopPropagation();
    });

});
