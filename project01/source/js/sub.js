import recipeArr from "./recipe-data.js";

$(document).ready(function () {
  // popup js
  const $body = $("body"),
    $dimm = $(".dimm"),
    $popupWrap = $(".popup-wrap"),
    $popupCloseBtn = $(".popup .close-btn"),
    $recipeBtn = $(".recipe-grid .link-btn");

  // popup show, close function
  function popShow() {
    $popupWrap.addClass("on");
    $body.addClass("on");
    $dimm.addClass("on");
  }

  function popClose() {
    $popupWrap.removeClass("on");
    $body.removeClass("on");
    $dimm.removeClass("on");
  }

  $recipeBtn.on("click", function () {
    popShow();
    let curRecipe = $(this).data("recipe");
    let Name = recipeArr[curRecipe][0].name,
      Src = recipeArr[curRecipe][0].src,
      Ingredient = recipeArr[curRecipe][0].ingredient,
      Recipe = recipeArr[curRecipe][0].recipe;

    // Ingredient 가공
    Ingredient = Ingredient.split(" | ");

    // map(v=>가공된v값)
    // =>변수에 할당시 새로운 배열값으로 같은 배열주소에 재할당함
    // -> 원본배열은 보존한다!
    let splitIng = Ingredient.map((v) => `<span>${v}</span>`);

    // forEach 사용하는 방법
    // let temp = [];

    // Ingredient.forEach((v,i)=>{
    //   temp[i] = `<aside>${v}</aside>`;
    // }); ///// forEach ////

    // recipe 가공
    Recipe = Recipe.split(" | ");

    let splitRecipe = Recipe.map((v) => `<p>${v}</p>`);

    $popupWrap.find(".title").text(Name);
    $popupWrap.find("img").attr("src", `./img/sub/${Src}`);
    $popupWrap.find("img").attr("alt", Name);
    $popupWrap.find(".ingredient").html(splitIng);
    $popupWrap.find(".recipe").html(splitRecipe);
  });

  // popup close js
  $popupCloseBtn.on("click", function () {
    popClose();
  });

  // 외부 영역 클릭시 팝업 닫기
  $(document).mouseup(function (e) {
    if ($popupWrap.has(e.target).length === 0) {
      popClose();
    }
  });

  // 메인에서 클릭 시 서브페이지 팝업 오픈
  // let dataSession = sessionStorage.getItem('saveData');


  // $recipeBtn.each(function(){
  //   let dataRecipe = $(this).data('recipe');
  //   console.log(dataSession, dataRecipe);
  //   $(this).addClass(dataRecipe);
  //   $recipeBtn.hasClass(dataSession);
  // });
  
});
