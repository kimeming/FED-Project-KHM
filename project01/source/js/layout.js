$(document).ready(function () {
  const $body = $("body"),
    $gnbWrap = $(".header .gnb-wrap"),
    $headerBg = $(".header-bg"),
    $menuBtn = $(".header .menu-btn");

  // gnb js
  $menuBtn.on({
    click: function () {
      if (!$(this).hasClass("off")) {
        $(this).addClass("off");
        $body.addClass("on");
        $gnbWrap.addClass("open");
        $headerBg.addClass("on");
      } else {
        $(this).removeClass("off");
        $body.removeClass("on");
        $gnbWrap.removeClass("open");
        $headerBg.removeClass("on");
      }
    },
  });

  // top button js
  const $topBtn = $(".btn-top");

  $(window).on("scroll", function () {
    let num = $(this).scrollTop();

    if (num >= 300) {
      $topBtn.stop().fadeIn(500);
    } else {
      $topBtn.stop().fadeOut(500);
    }
  });
  $topBtn.on("click", function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 800);
  });

  //page scroll indigator
  const $prLeft = $(".progress .left .progress-bar"),
    $prRight = $(".progress .right .progress-bar");

  $(window).on("scroll", function () {
    var currentPercentage =
      ($(window).scrollTop() /
        ($(document).outerHeight() - $(window).height())) *
      100;
    var RightDeg = Math.floor(currentPercentage * 3.6);
    var LeftDeg = Math.floor(currentPercentage * 3.6);
    if (RightDeg <= 180) {
      $prRight.css("transform", "rotate(" + RightDeg + "deg)");
    } else {
      $prRight.css("transform", "rotate(180deg)");
    }
    if (currentPercentage > 50) {
      if (LeftDeg >= 180) {
        $prLeft.css("transform", "rotate(" + RightDeg + "deg) scaleX(-1)");
      }
    } else {
      $prLeft.css("transform", "rotate(180deg) scaleX(-1)");
    }
  });
});
