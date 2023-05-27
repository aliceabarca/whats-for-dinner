// querySelectors

var sideDish = document.querySelector('#side');
var mainDish = document.querySelector('#main-dish');
var dessertDish = document.querySelector('#dessert');
var cookPotImg = document.querySelector('.cookpot-img');
var letsCookButton = document.querySelector('.lets-cook-btn');
var recipeSection = document.querySelector('.recipe-section');
var youShouldMake = document.querySelector('.you-should-make');
var choiceMsg;

// event listeners 
letsCookButton.addEventListener('click', showDish);



function randomSideDish() {
  var randomNum = Math.floor(Math.random() * sides.length);
  var randomSide = sides[randomNum];
  return randomSide;
}

function randomMainDish() {
  var randomNum = Math.floor(Math.random() * mains.length);
  var randomMain = mains[randomNum];
  return randomMain;
}

function randomDessertDish() {
  var randomNum = Math.floor(Math.random() * dessert.length);
  var randomDessert = dessert[randomNum];
  return randomDessert;
}

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}

































var sides = [`Miso Glazed Carrots`,
  `Coleslaw`,
  `Garden Salad`,
  `Crispy Potatoes`,
  `Sweet Potato Tots`,
  `Coconut Rice`,
  `Caeser Salad`,
  `Shrimp Summer Rolls`,
  `Garlic Butter Mushrooms`,
  `Hush Puppies`];

var mains = [`Miso Glazed Carrots`,
    `Coleslaw`,
    `Garden Salad`,
    `Crispy Potatoes`,
    `Sweet Potato Tots`,
    `Coconut Rice`,
    `Caeser Salad`,
   `Shrimp Summer Rolls`,
    `Garlic Butter Mushrooms`,
    `Hush Puppies`];

var dessert = [`Apple Pie`,
      `Lemon Meringue Pie`,
      `Black Forest Cake`,
      `Banana Bread`,
      `Peach Cobbler`,
      `Cheesecake`,
      `Funfetti Cake`,
      `Baklava`,
      `Flan`,
      `Macarons`,
      `Macaroons`,
      `Chocolate Cupcakes`,
      `Pavlova`,
      `Pumpkin Pie`,
      `Key Lime Pie`,
      `Tart Tatin`,
      `Croissants`,
      `Eclairs`];