// 等頁面loading完成後執行
$(document).ready(function(){
    $('.menu-btn').click(function(){
        // 中間頁面
        $('.menu01').toggleClass('menu01-1');
        // menu頁面
        $('.menu02').toggleClass('menu02-1');  
    })
})