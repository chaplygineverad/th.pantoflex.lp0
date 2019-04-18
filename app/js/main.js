/*________smooth scroll_____*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 2500);
});
//=include ../components/diagnostic/diagnostic.js
//=include ../components/composition/composition.js
//=include ../components/result/result.js
//=include ../components/feedbacks/feedbacks.js
//=include ../components/sertificate/sertificate.js
//=include ../components/footer/footer.js
