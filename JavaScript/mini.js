"use strict";

$(function(){

//configuration 
var width = 720;
var animationSpeed= 1000;
var pause = 3000;
var CurrentSlide = 1;

//cache DOM     
var $slider = $("#slider");
var $slideContainer = $slider.find(".slides");
var $slides = $slideContainer.find(".slide");

var interval;

function startSlider(){
    interval = setInterval(function() {
        $slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function() {        
            CurrentSlide++;
                if(CurrentSlide === $slides.length) {
                    CurrentSlide = 1;
                    $slideContainer.css("margin-left", 0);
                }   
        });
    }, pause);
}
function stopSlider() {
    clearInterval(interval);
}

$slider.on("mouseenter", stopSlider). on("mouseleave", startSlider);

startSlider();

//listen for mouseenter and pause
//resume on mouseleave

});