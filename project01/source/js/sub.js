$(document).ready(function () {
  // popup js
  const $body = $("body"),
    $dimm = $(".dimm"),
    $popupWrap = $(".popup-wrap"),
    $popupCloseBtn = $(".popup .close-btn"),
    $recipeBtn = $(".recipe-grid .link-btn");

  $recipeBtn.on("click", function () {
    $popupWrap.addClass("on");
    $body.addClass("on");
    $dimm.addClass("on");
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
      // let temp = Ingredient.map(v=>`<div>${v}</div>`);
      // console.log(temp);

      let temp = [];

      Ingredient.forEach((v,i)=>{
        temp[i] = `<aside>${v}</aside>`;
      }); ///// forEach ////


    $popupWrap.find(".title").text(Name);
    $popupWrap.find("img").attr("src", `/project01/source/img/sub/${Src}`);
    $popupWrap.find("img").attr("alt", Name);
    $popupWrap.find(".ingredient").html(temp);
    $popupWrap.find(".recipe").text(Recipe);
  });

  $popupCloseBtn.on("click", function () {
    $popupWrap.removeClass("on");
    $body.removeClass("on");
    $dimm.removeClass("on");
  });

  // 레시피 내용 변경
  const recipeArr = 
  {
    bananaBear: [
      {
        name: "Banana Bear",
        src: "img-recipe01.jpg",
        ingredient: `75 g butter, soft | 90 g powdered sugar and a little more for dusting | 1 egg | 2 bananas, ripe 80 g flour | z tsp baking powder | ¼ tsp cinnamon 1 banana | 20 g butter | 1 tbsp sugar 100 g HARIBO Goldbears /75 ml cream 2 Goldbear baking molds`,
        recipe: `1. Preheat the oven to 180 *C al top and boltom heat,
        2. Mash the two ripe bananas in a bowl with a fork, In another bowl, beat the butter with the powdered sugar until creamy.
        Then stir in the egg, the mashed bananas, the flour, the baking powder and the cinnamon.
        3. Divide the batter evenly between the two Goldbear molds and put them in the oven for 30 minules. Allow the bears to cool completely before removing them from the mold. Take them out of the moid and dust with a little powdered sugar.
        Now It's time for the decoration: peel the last banana and cut it in half lengthwise. Put the butter with the sugar into a pan and let it melt over medium heat. Put the banana halves into the pan and caramelize them for about 5 minutes. In the meantime you can whip the cream until stiff.
        5. Decorate the bears with the banana halves, the whipped cream and the Goldbears: Have fun with your banana bears!`,
      },
    ],
    brownBear: [
      {
        name: "Brown Bear",
        src: "img-recipe02.jpg",
        ingredient: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nulla nihil? Ab voluptas dolorum quibusdam laboriosam doloremque harum blanditiis assumenda vero recusandae illum! Officiis provident veritatis illo quaerat! Id!`,
        recipe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nulla nihil? Ab voluptas dolorum quibusdam laboriosam doloremque harum blanditiis assumenda vero recusandae illum! Officiis provident veritatis illo quaerat! Id!Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia nulla nihil? Ab voluptas dolorum quibusdam laboriosam doloremque harum blanditiis assumenda vero recusandae illum! Officiis provident veritatis illo quaerat! Id!`,
      },
    ],
  };
});
