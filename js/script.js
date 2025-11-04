$(function () {
  // hamburger-menu
  $(".js-hamburger, .js-drawer, .js-drawer a").click(function () {
    // ↑の三つのクラスのいずれかがクリックされた時に、
    $(".js-hamburger").toggleClass("is-active");
    // js-hamburgerが開閉された時にis-activeクラスを付与しますよ。
    $(".js-drawer").fadeToggle();
    // js-drawerはフェードイン、フェードアウトします。
  });
});



