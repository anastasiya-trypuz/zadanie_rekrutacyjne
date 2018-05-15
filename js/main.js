"use strict";

var degree = 0;
var state = false;
var off = 'materials/hamburger_menu.svg';
var on = 'materials/iks.svg';
var animated_svg = document.querySelector('.main__animated-svg');
var toggle_icon = document.querySelector('.toggle-btn__icon');
var toggle_btn = document.querySelector('.toggle-btn');
var header = document.querySelector('.header');
var body = document.querySelector('body');
var menu = document.querySelector('.menu');
var menu_list = document.querySelector('.menu__list');
var menu_icons = document.querySelector('.menu__social-icons');

// SVG icon rotation 
var animateSVG = function() {
    degree += 360;
    animated_svg.style.transform = "rotate(" + degree + "deg)";
}

// Toggle menu
var toggleMenu = function() {
    if(state) {
        toggle_icon.src = off;
        header.classList.remove('active');
        body.classList.remove('active');
        menu.classList.remove('active');
        menu_list.classList.remove('active');
        menu_icons.classList.remove('active');
        state = false;
    } else {
        toggle_icon.src = on;
        header.classList.add('active');
        body.classList.add('active');
        menu_list.classList.add('active');
        menu.classList.add('active');
        menu_icons.classList.add('active');
        state = true;
    }
}

// Event Listeners 
animated_svg.addEventListener('load', function() {
    var svg_img = animated_svg.contentDocument.rootElement;
    svg_img.addEventListener('click', animateSVG);
});
toggle_btn.addEventListener('click', toggleMenu);

