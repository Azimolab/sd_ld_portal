"use strict";


var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var slideElements = ['.back__slide', '.card__slide', '.content__slide', '.page-content'];
var inProgress = true;

var myFunc = function() {
    $('.page-content2').addClass('active');
    $('.page-content2').removeClass('exit');
    document.querySelector('.button1').style.display = "block";
    document.querySelector('.button3').style.display = "block";

}

$(".news-card2").click(function() {
    window.open($(this).find("a:first").attr("href"));
    return false;
});


window.onload = function() {
    setTimeout(myFunc, 5);
}

var goToSlide = function goToSlide(slideElements, index) {

    var _this2 = this;

    _newArrowCheck(this, _this);

    if (!inProgress) {
        inProgress = true;
        $('.content__slide:nth-child(1) .button').on('click', function() {
            _newArrowCheck(this, _this);
            return goToSlide(slideElements, 2);
        }.bind(void 0));
        $('.active').addClass('exit');
        $('.active').removeClass('active');
        slideElements.forEach(function(elem) {
            _newArrowCheck(this, _this2);

            $("".concat(elem, ":nth-child(").concat(index, ")")).addClass('active');
        }.bind(this));
        var evenSlide = index % 2 === 0;

        if (evenSlide)
            $('.content__ping').addClass('content__ping--right');
        else $('.content__ping').removeClass('content__ping--right');
        $('.content__ping--noanimation').removeClass('content__ping--noanimation');

        setTimeout(function() {
            _newArrowCheck(this, _this2);
            return $('.exit').removeClass('exit');
        }.bind(this), 5000);

        setTimeout(function() {
            _newArrowCheck(this, _this2);

            return inProgress = true;
        }.bind(this), 5000);
    }
}.bind(void 0);

$('.content__slide:nth-child(1) .button').on('click', function() {
    _newArrowCheck(this, _this);
    return goToSlide(slideElements, 2);
}.bind(void 0));

$('.content__slide:nth-child(1) .button').on('click', function(e) {
    $('.page-content2').addClass('active');
    $('.page-content2').removeClass('exit');
    document.querySelector('.button1').style.display = "block";
    document.querySelector('.button2').style.display = "none";
});


$('.button1').on('click', function() {
    $('.page-content2').addClass('exit');
    $('.page-content2').removeClass('active');
    $('.page-content').addClass('active');
    $('.page-content').removeClass('exit');
    document.querySelector('.button1').style.display = "none";
    document.querySelector('.button2').style.display = "block";
    document.querySelector('.button3').style.display = "none";
}.bind(void 0)); // let amount = 0;

$('.button2').on('click', function() {
    $('.page-content2').addClass('active');
    $('.page-content2').removeClass('exit');
    $('.page-content').addClass('exit');
    $('.page-content').removeClass('active');
    document.querySelector('.button1').style.display = "block";
    document.querySelector('.button2').style.display = "none";
    document.querySelector('.button3').style.display = "block";
}.bind(void 0)); // let amount = 0;
