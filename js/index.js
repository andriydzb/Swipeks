$('.click').click(function () {
  $('nav').addClass("active");
  $('body').addClass("menu-open");
});

$('.header__close').click(function () {
  $('nav').removeClass("active");
  $('body').removeClass("menu-open");
});

$('.click1').click(function () {
  $('.header__about').addClass("header__about_active");
  $('body').addClass("menu-open");
});

$('.header__about_close').click(function () {
  $('.header__about').removeClass("header__about_active");
  $('body').removeClass("menu-open");
}); 

$('.grid').masonry({
  itemSelector: '.grid-item',
  fitWidth: true,
  gutter: 20
});