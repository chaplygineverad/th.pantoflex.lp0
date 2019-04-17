var quoter = document.querySelectorAll(".composition__circle");
var composition = document.querySelector('.composition');


function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

window.addEventListener("scroll", function () {
    var scrolled = window.pageYOffset;
    var active = document.querySelectorAll('.composition__circle-go');


    if (scrolled>=getCoords(composition).top) {
        for (var i=0; quoter.length; i++) {
            quoter[i].classList.add("composition__circle-go");

           if(quoter[quoter.length - 1].classList.contains("composition__circle-go")){
            if(quoter[quoter.length - 1].classList.contains("composition__circle-go")){
                return;
            }
        }
    }

});



