/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});


// store.items.push(Item.create('apples'));
api.getItems((items) => {
  
  items.forEach((item) => store.addItem(item));
  const item = store.items[0];
 console.log('current name: ' + item.name);
 store.findAndUpdate(item.id, { name: 'foobar' });
 console.log('new name: ' + item.name);
  shoppingList.render();

});
