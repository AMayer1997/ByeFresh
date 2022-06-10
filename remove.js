console.log("Remove script started");

const addonClassSelector = ".web-hpgf8j";
const recipeClassSelector = ".web-esb7e7";
const recipeParentClassSelector = ".web-1hok31h";

var hideAddons;
var hideRecipes;

getStorageData();

loop();

async function loop() {
  removeAddons();
  removeRecipes();
  await sleep(1000);
  loop();
}

function removeAddons() {
  if (!hideAddons) return;

  var addons = document.querySelectorAll(addonClassSelector);
  addons.forEach((addon) => {
    if (addon) addon.remove();
  });
}

function removeRecipes() {
  if (!hideRecipes) return;

  var recipes = document.querySelectorAll(recipeClassSelector);
  if (recipes) {
    recipes.forEach((recipe) => {
      var recipeParent = recipe.closest(recipeParentClassSelector);
      if (recipeParent) recipeParent.remove();
    });
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function getStorageData() {
  chrome.storage.sync.get("hideAddons", (data) => {
    hideAddons = data.hideAddons;
  });

  chrome.storage.sync.get("hideRecipes", (data) => {
    hideRecipes = data.hideRecipes;
  });
}
