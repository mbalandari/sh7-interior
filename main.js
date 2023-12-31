$(document).on('scroll', function () {
    var pixlesFromTop = $(document).scrollTop()

    if (pixlesFromTop > 50) {
        $('header').addClass('hidden')
    }
    else {
        $('header').removeClass('hidden')
    }

    if (pixlesFromTop < 600) {
        $('body').css('background-color', '#fff')
    }
    else if (pixlesFromTop < 1400) {
        $('body').css('background-color', '#a29c97')
    }
    else if (pixlesFromTop < 2200) {
        $('body').css('background-color', '#d9dfe4')
    }
    else if (pixlesFromTop < 3000) {
        $('body').css('background-color', '#fff0f0')
    }
    else {
        $('body').css('background-color', '#cdccc7')
    }

    var documentHeight = $(document).height()
    var windowHeight = $(window).height()
    var diff = documentHeight - windowHeight
    var percentage = 100 * pixlesFromTop / diff

    $('.bar').css('width', percentage + '%')
})