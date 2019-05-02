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


