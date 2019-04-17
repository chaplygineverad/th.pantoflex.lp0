var quoter = document.querySelectorAll(".composition__circle");
var composition = document.querySelector('.composition');
var active = document.querySelectorAll('.composition__circle-go');

function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

window.addEventListener("scroll", function () {
    var scrolled = window.pageYOffset;

    //console.log(scrolled, Math.floor(getCoords(composition).top));

    if (scrolled>=getCoords(composition).top) {
        for (var i=0; quoter.length; i++) {
            quoter[i].classList.add("composition__circle-go");

            if(quoter[quoter.length - 1].classList.contains("composition__circle-go")){
                return;
            }
        }
    }

});

/*window.addEventListener("DOMContentLoaded", function () {
    if (composition.target) {

        for (var i=0; quoter.length; i++) {
            quoter[i].classList.add("composition__circle-go");
        }
    }
});*/

