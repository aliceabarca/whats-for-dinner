// querySelectors

var sideDish = document.querySelector('#side');
var mainDish = document.querySelector('#main-dish');
var dessertDish = document.querySelector('#dessert');
var cookPotImg = document.querySelector('.cookpot-img');
var letsCookButton = document.querySelector('.lets-cook-btn');
var recipeSection = document.querySelector('.recipe-section');
var youShouldMake = document.querySelector('.you-should-make');
var foodSection = document.querySelector('.food-section');
var usersName = document.querySelector('#users-name');
var submitButton = document.querySelector('.submit-button');
var choiceMsg;

// event listeners 
letsCookButton.addEventListener('click', showDish);
submitButton.addEventListener('click', loginPage);

// functions
function showDish() {
  hide(cookPotImg);
  var sideDishSelected = sideDish.checked;
  var mainDishSelected = mainDish.checked;
  var dessertDishSelected = dessertDish.checked;
  if (sideDishSelected) {
    choiceMsg = randomSideDish(sides);
    youShouldMake.innerText = `YOU SHOULD MAKE: `;
    foodSection.innerHTML = `<b>${choiceMsg}</b>`;
  } else if (mainDishSelected) {
    choiceMsg = randomMainDish(mains);
    youShouldMake.innerText = `YOU SHOULD MAKE: `;
    foodSection.innerHTML = `<b>${choiceMsg}</b>`;
  } else if (dessertDishSelected) {
    choiceMsg = randomDessertDish(dessert);
    youShouldMake.innerText = `YOU SHOULD MAKE: `;
    foodSection.innerHTML = `<b>${choiceMsg}</b>`;
  }

}

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

var mains = [  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesan",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"];

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