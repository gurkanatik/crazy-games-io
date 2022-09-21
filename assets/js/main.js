$('.nav-opener').on('click',function (){
    $('.nav-section').toggleClass('active')
})
$('.search-opener').on('click',function (){
    $('.search-section').toggleClass('active')
    if($('search-section').hasClass('active')){
        $('.search-section input').focus()
    }
})