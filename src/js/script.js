$(document).ready(function() {
   
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      
      

       var menuElem = document.getElementById('catalog__menu'),
    titleElem = menuElem.querySelector('.catalog__menu_title');
    document.onclick = function(event) {
    var target = elem = event.target;
    while (target != this) {
          if (target == menuElem) {
          if(elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
          menuElem.classList.toggle('catalog__menu_open')
              return;
          }
          target = target.parentNode;
      }
    menuElem.classList.remove('catalog__menu_open');
}

})