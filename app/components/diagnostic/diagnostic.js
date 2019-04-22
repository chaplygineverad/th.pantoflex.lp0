// $(document).ready(function() {
//     $("#diagnostic__diagram-1").circliful({
//         animationStep: 2,
//         foregroundBorderWidth: 5,
//         backgroundBorderWidth: 5,
//         percent: 25,
//         percentageTextSize: 32,
//         pointColor: '#f4f7f9',
//         foregroundColor: '#e50100',
//         backgroundColor: '#edf3f6',
//         pointSize: 48,
//         fontColor: '#e50100',
//         textAdditionalCss: 'font-weight: 700;',
//         percentageY: 108,
//         animateInView: true
//     });
//
//     $("#diagnostic__diagram-2").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 5,
//         backgroundBorderWidth: 5,
//         percent: 11,
//         percentageTextSize: 32,
//         pointColor: '#f4f7f9',
//         foregroundColor: '#e50100',
//         backgroundColor: '#edf3f6',
//         pointSize: 48,
//         fontColor: '#e50100',
//         textAdditionalCss: 'font-weight: 700;',
//         percentageY: 108,
//         animateInView: true
//     });
//
//     $("#diagnostic__diagram-3").circliful({
//         animationStep: 1,
//         foregroundBorderWidth: 5,
//         backgroundBorderWidth: 5,
//         percent: 8,
//         percentageTextSize: 32,
//         pointColor: '#f4f7f9',
//         foregroundColor: '#e50100',
//         backgroundColor: '#edf3f6',
//         pointSize: 48,
//         fontColor: '#e50100',
//         textAdditionalCss: 'font-weight: 700;',
//         percentageY: 108,
//         animateInView: true
//     });
// });

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(document).ready(function() {
        $("#diagnostic__diagram-1").circliful({
            animationStep: 2,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 25,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#e50100',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#e50100',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            animation: 0,
            animateInView: false
        });

        $("#diagnostic__diagram-2").circliful({
            animationStep: 1,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 11,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#e50100',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#e50100',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            animation: 0,
            animateInView: false
        });

        $("#diagnostic__diagram-3").circliful({
            animationStep: 1,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 8,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#e50100',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#e50100',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            animation: 0,
            animateInView: false
        });
    });
} else {
    $(document).ready(function() {
        $("#diagnostic__diagram-1").circliful({
            animationStep: 2,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 25,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#e50100',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#e50100',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            animation: 1,
            animateInView: true
        });

        $("#diagnostic__diagram-2").circliful({
            animationStep: 1,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 11,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#e50100',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#e50100',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            animation: 1,
            animateInView: true
        });

        $("#diagnostic__diagram-3").circliful({
            animationStep: 1,
            foregroundBorderWidth: 5,
            backgroundBorderWidth: 5,
            percent: 8,
            percentageTextSize: 32,
            pointColor: '#f4f7f9',
            foregroundColor: '#e50100',
            backgroundColor: '#edf3f6',
            pointSize: 48,
            fontColor: '#e50100',
            textAdditionalCss: 'font-weight: 700;',
            percentageY: 108,
            animation: 1,
            animateInView: true
        });
    });
}