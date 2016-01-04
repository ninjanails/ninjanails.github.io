$(document).ready(function () {

    'use strict';

    window.addEventListener('scroll', function (e) {

        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 300;
        var siteHeader = $('#site-header');

        if (distanceY > shrinkOn) {
            siteHeader.addClass('sticky-site-header');
        } else {
            siteHeader.removeClass('sticky-site-header');
        }
    });

});