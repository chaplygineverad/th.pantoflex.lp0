//-----------------------------------------------slider start
let slider1 = $('.feedbacks-items');
let sliderElements;

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
};
showSlider();
$(window).on('resize', showSlider);
//----------------------------------------slider end

//----------------------------------------open slide start
let slides = document.querySelectorAll('.feedbacks-item');
let slider = document.querySelector('.slick-track');
for (let i = 0; i < slides.length; i++){
    let openSlide = slides[i].querySelector('.open-slide');

    //
    $('.feedbacks-items').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.feedbacks-item').removeClass('opened');
        $(openSlide).html('+');
    });


    openSlide.addEventListener('click', function () {
        if(!this.parentElement.classList.contains('opened')) {
            this.parentElement.classList.add('opened');
            this.innerHTML = '-';
        } else {
            this.parentElement.classList.remove('opened');
            this.innerHTML = '+';
        }
    });
}
//----------------------------------------open slide end


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

sendFeedbackBtn.addEventListener('click', function () {
    if(!userName.value || !userAge.value || !userFeedback.value){
        alert('Заполните все поля.');
    } else {
        userName.value = '';
        userAge.value = '';
        userFeedback.value = '';
        feedBackPop.classList.add('visible');
    }

    closePop.addEventListener('click', function () {
        feedBackPop.classList.remove('visible');
    });
});


