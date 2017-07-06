$('.click').click(function () {
  $('.header-xs__navigation_menu').removeClass("hide");
});

$('.header-xs__navigation_menu_close').click(function () {
  $('.header-xs__navigation_menu').addClass("hide");
});

$('.click1').click(function () {
  $('.header-xs__about_menu').removeClass("hide");
});

$('.header-xs__about_menu_close').click(function () {
  $('.header-xs__about_menu').addClass("hide");
}); 

$('.grid').masonry({
  itemSelector: '.grid-item',
  fitWidth: true,
  gutter: 20
});