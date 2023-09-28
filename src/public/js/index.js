$(function(){
    const showPhoneNumberBtns = $('.show-phone-number');

    showPhoneNumberBtns.click(function(){
        $(this).siblings('p').toggle();
    })
})
