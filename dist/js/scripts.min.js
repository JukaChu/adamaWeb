let buttonForm = document.querySelector('.form-container .link.link--green');

function ifButtonForm() {
    if (!buttonForm) {

    } else {
        buttonForm.addEventListener('click', (e) => {
            if (buttonForm.classList.contains('active')) {

            } else {
                e.preventDefault();
                buttonForm.classList.add('active');
            }
        })
    }
};
ifButtonForm();


jQuery(function($) {

    const section = $('.follow-class'),
        nav = $('.menu'),
        navHeight = nav.outerHeight(); // получаем высоту навигации

    // поворот экрана

    $(window).on('scroll', function () {
        const position = $(this).scrollTop() + 300;

        section.each(function () {
            const top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('li').removeClass('active');
                section.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').closest('li').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - 60
        }, 487);

        return false;
    });

});

$(".content-right a").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#consult-form").offset().top
    }, 600);
});
$(".down-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#download-block").offset().top
    }, 400);
});