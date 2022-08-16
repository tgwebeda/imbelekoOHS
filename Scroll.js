window.addEventListener('scroll',()=>{
    let content = document.querySelector('.rows');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.7;
        if(contentPosition < screenPosition){
        content.classList.add('active');
   }else{
       content.classList.remove('active');
   }
});

var scroll = window.requestAnimationFrame;
var elementsToshow = document.querySelectorAll('.show-on-scroll');

function loop() {
    Array.prototype.forEach.call(elementsToshow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
    scroll(loop);
}
loop();

function isElementInViewport(element) {
    var rectangle = element.getBoundingClientRect();
    var height = window.innerHeight || document.documentElement.clientHeight;
    var top = rectangle.top;
    var bottom = rectangle.bottom;

    return (top <= 0 && bottom >= 0) ||
        (bottom >= height && top <= height) ||
        (top >= 0 && bottom <= height);
}