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
        const position = $(this).scrollTop() + 200;

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
$(".mob-only.green-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#consult-form").offset().top
    }, 700);
});
$(".down-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#download-block").offset().top + 40
    }, 400);
});


// Получаем нужный элемент
var elementBtns = document.querySelector('.consult-form');

var Visible = function (target) {
    if (!elementBtns) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.mob-only.green-link').classList.add('hidden');
        } else {
            // if hidden el
            document.querySelector('.mob-only.green-link').classList.remove('hidden');
        };
    }
    // all of position element

};

// start function after scroll
window.addEventListener('scroll', function() {
    Visible (elementBtns);
});

// start function after load
Visible (elementBtns);

//open video modal

let videoOpener = document.querySelector('.expr-video a');
let videoModal = document.querySelector('.modal-window--video');
let closeModal = document.querySelector('.close-modal');

function ifVideoOpenedOnPage() {
    if(!videoOpener) {

    } else {
        videoOpener.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('no-scroll');
            videoModal.classList.add('open');
        });

        closeModal.addEventListener('click', () => {
            closeModal.closest('.modal-window').classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
        videoModal.addEventListener('click', () => {
            videoModal.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
        videoModal.querySelector('.modal-container').addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }
}
ifVideoOpenedOnPage();