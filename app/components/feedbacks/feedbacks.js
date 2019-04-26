//-----------------------------------------------slider start
let slider1 = $('.feedbacks-items');

function initSlider(slider, options) {
    slider.on('init', function () {
        setTimeout(function () {
            slider.addClass('is-ready');
        }, 100);
    });
    slider.not('.slick-initialized').slick(options);
}


function destroySlider(slider) {
    if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
    }
}


function showSlider() {
    var tablet = ($(window).width()) < 1024;
    if (tablet) {
        initSlider(slider1, {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: true,
            adaptiveHeight: true,
            variableWidth: true,
        });

    } else {
        destroySlider(slider1);
    }
}
showSlider();
$(window).on('resize', showSlider);
//----------------------------------------slider end

$('.feedbacks-items').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.feedbacks-item').removeClass('opened');
    $('.open-slide').html('+');
});


$('.open-slide').on('click', function () {
    if(!$(this).parent().hasClass('opened')){
        $(this).parent().addClass('opened');
        $(this).html('-');
    } else {
        $(this).parent().removeClass('opened');
        $(this).html('+');
    }
});
//feedback form
let file = document.querySelector('.file'),
    userName = document.querySelector('.inp-name'),
    userAge = document.querySelector('.inp-age'),
    userFeedback = document.querySelector('.inp-feedback'),
    sendFeedbackBtn = document.querySelector('.feedbacks-form__btn'),
    feedBackPop = document.querySelector('.feedbacks__popup'),
    innerPop = document.querySelector('.feedbacks__popup-content'),
    closePop = document.querySelector('.feedbacks__popup-close');

//FILE ADDED ALERT
file.addEventListener("change", function () {
    let filePath = file.value.slice(file.value.lastIndexOf('\\') + 1);
    alert('Ваш файл "' + filePath + '" был успешно добавлен.')
});
// userAge.addEventListener('input', function () {
//     if(this.value.length > 3 || this.value > 150) {
//         alert('Введите число меньше 150');
//         this.value = '';
//     }
// });
sendFeedbackBtn.addEventListener('click', function () {
    if(!userName.value || !userAge.value || !userFeedback.value){
        alert('Заполните все поля.');
    } else {
        if(Number(userFeedback.value)){
            alert('Введите Ваш отзыв.');
            userFeedback.value = '';
        } else {
            userName.value = '';
            userAge.value = '';
            userFeedback.value = '';
            feedBackPop.classList.add('visible');
        }
        }

    closePop.addEventListener('click', function () {
        feedBackPop.classList.remove('visible');
    });
});


