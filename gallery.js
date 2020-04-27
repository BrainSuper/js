$('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
$('.data-filter ul li').click(function () {
    $('.data-filter ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});
$('.data_filter_js ul li').click(function () {

    var select = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: select
    });
    return false;
});
// \\\\\\\\\\\\\\\\\\\
$(document).ready(function () {
    var menuElem = document.getElementById('catalog__menu'),
        titleElem = menuElem.querySelector('.catalog__mobile__menu_title');
    document.onclick = function (event) {
        var target = elem = event.target;
        while (target != this) {
            if (target == menuElem) {
                if (elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
                menuElem.classList.toggle('catalog__mobile__menu_open')
                return;
            }
            target = target.parentNode;
        }
        menuElem.classList.remove('catalog__mobile__menu_open');
    }
});
// =============================
