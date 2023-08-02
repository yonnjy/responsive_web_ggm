$(function(){
    $('.main_slide').slick({
        arrows: false,
        vertical: true,
        dots: true,
        autoplay: true,
    });

    $('.mopen').on('click', function(){
        $('#gnb').toggleClass('on');
    })
});

// window.addEventListener('DOMContentLoaded', ()=>{});
// $(function(){}); 둘이 같은거고 돔을 다 읽고 실행