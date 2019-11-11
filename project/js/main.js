var arr = ['Dorji bari  long Style', 'Dorji  East long Style', 'Dorji bari Style', 'Dorji bari East Style'];
$(".view").text((i) => arr[i]);

$(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });
});


