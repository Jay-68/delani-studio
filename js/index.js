$('#design').click(function() {
  $('#design-img').toggle();
  $('#design-content').toggle();
});

$('#development').click(function() {
  $('#dev-img').toggle();
  $('#dev-content').toggle();
});
$('#product').click(function() {
  $('#product-img').toggle();
  $('#product-content').toggle();
});

$('#img1').hover(function() {
  $('.image-effect').addClass("mask flex-center rgba-red-strong");
});
$("div.image-frame").hover(function() {
  $(".classAdd2").addClass("mask flex-center rgba-blue-light");
});
$("div.image-frame").hover(function() {
  $(".classAdd3").addClass("mask flex-center rgba-green-slight");
});
$("div.image-frame").hover(function() {
  $(".classAdd4").addClass("mask flex-center");
});