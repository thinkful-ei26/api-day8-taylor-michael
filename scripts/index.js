/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems(function(data) {
  console.log(data);
});

$.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
  console.log('api response:', response);
});
store.items.push(Item.create('apples'));
