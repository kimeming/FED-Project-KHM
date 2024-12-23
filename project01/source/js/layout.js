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

  // 마우스 커서
  const cursor = document.querySelector(".cursor");

  // 커서 이동
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    cursor.animate(
      {
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
      },
      1000
    );
  });

  // 마우스 클릭
  document.addEventListener("mousedown", () => {
    cursor.classList.add("clicked");
  });
  document.addEventListener("mouseup", () => {
    cursor.classList.remove("clicked");
  });
  // 링크 hover
  let links = document.querySelectorAll("a");
  links.forEach((i) => {
    i.addEventListener("mouseover", () => {
      cursor.classList.add("pointer");
    });
    i.addEventListener("mouseout", () => {
      cursor.classList.remove("pointer");
    });
  });
  // 버튼 hover
  let btns = document.querySelectorAll("button");
  btns.forEach((i) => {
    i.addEventListener("mouseover", () => {
      cursor.classList.add("pointer");
    });
    i.addEventListener("mouseout", () => {
      cursor.classList.remove("pointer");
    });
  });

  // contact popup s
  const $contactPopup = $(".contact-popup"),
    $btnSubmit = $(".submit-btn"),
    $btnClose = $(".close-btn");
  
  // 팝업 열기
  $(".footer .noti").on("click keyup", function(){
    $contactPopup.addClass("open");
  });

  // 팝업 닫기
  $btnClose.on("click keyup", function(){
    $contactPopup.removeClass("open");
    $(".error").fadeOut();
  });

  // 폼 제출 형식 구현
  $btnSubmit.on("click keyup", function(){
    $("input, textarea").each(function(){
      if($(this).val() == ""){
        $(this).siblings(".error").fadeIn();
      } else {
        $(this).siblings(".error").fadeOut();
        $contactPopup.addClass("complete")
      }
    });
    
    if($contactPopup.hasClass("complete")){
      alert("Successfully Submitted!");
      $contactPopup.removeClass("open");
    }
  });
});
