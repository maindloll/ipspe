$(document).ready(function () {
 $("[data-collapse]").on("click", function (event) {
  event.preventDefault();
  var $this = $(this);
  $this.toggleClass("active");
 });
 $("#nav_toggle").on("click", function (event) {
  $(this).toggleClass("active");
  $('.desktop-nav-menu').toggleClass("active");
 });
 $('.second-level-menu > li > a').on('click', function (e) {
  e.preventDefault()
  e.stopPropagation();
  $(this).toggleClass('active')
 })
 $('.menu-list').on('click', function (e) {
  e.preventDefault()
  $(this).toggleClass('active')
 })
 $('.learn-btn', ).click(function () {
  $([document.documentElement, document.body]).animate({
   scrollTop: $('.main-content').offset().top + 120
  }, 500);
 });
})