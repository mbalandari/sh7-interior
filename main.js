$(document).on('scroll', function () {
    pixlesFromTop = $(document).scrollTop()
    $('.progress').text(pixlesFromTop + ' pixels from top')
})