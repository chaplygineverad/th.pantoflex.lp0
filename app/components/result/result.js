// $(document).ready(function() {
//     $("#testing__left-diagram").circliful({
//         animationStep: 5,
//         foregroundBorderWidth: 5,
//         backgroundBorderWidth: 5,
//         percent: 86,
//         percentageTextSize: 32,
//         pointColor: '#f4f7f9',
//         foregroundColor: '#33bdb9',
//         backgroundColor: '#edf3f6',
//         pointSize: 48,
//         fontColor: '#33bdb9',
//         textAdditionalCss: 'font-weight: 700;',
//         percentageY: 108,
//         percentageX: 103,
//         animation: 1,
//         animateInView: true
//     });
//
//     $("#testing__right-diagram").circliful({
//         animationStep: 5,
//         foregroundBorderWidth: 5,
//         backgroundBorderWidth: 5,
//         percent: 92,
//         percentageTextSize: 32,
//         pointColor: '#f4f7f9',
//         foregroundColor: '#33bdb9',
//         backgroundColor: '#edf3f6',
//         pointSize: 48,
//         fontColor: '#33bdb9',
//         textAdditionalCss: 'font-weight: 700;',
//         percentageY: 108,
//         percentageX: 103,
//         animation: 1,
//         animateInView: true
//     });
// });
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(document).ready(function() {
        $("#testing__left-diagram").circliful({
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 86,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#33bdb9',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#33bdb9',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            percentageX: 103,
            animation: 0,
            animateInView: false
        });

        $("#testing__right-diagram").circliful({
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 92,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#33bdb9',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#33bdb9',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            percentageX: 103,
            animation: 0,
            animateInView: false
        });
    });
} else {
    $(document).ready(function() {
        $("#testing__left-diagram").circliful({
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 86,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#33bdb9',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#33bdb9',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            percentageX: 103,
            animation: 1,
            animateInView: true
        });

        $("#testing__right-diagram").circliful({
            animationStep: 5,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 92,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#33bdb9',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#33bdb9',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            percentageX: 103,
            animation: 1,
            animateInView: true
        });
    });
}