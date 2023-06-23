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
})

$('.bar').css('width', 70 + '%')