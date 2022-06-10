let hideAddons = true;
let hideRecipes = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hideAddons });
  chrome.storage.sync.set({ hideRecipes });
  console.log("Initalized ByeFresh");
});
