$(document).on('scroll', function () {
    pixlesFromTop = $(document).scrollTop()
    $('.progress').text(pixlesFromTop + ' pixels from top')

    if (pixlesFromTop > 50) {
        $('header').addClass('hidden')
    }
    else {
        $('header').removeClass('hidden')
    }
})