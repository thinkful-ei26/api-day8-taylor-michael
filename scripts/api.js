'use strict'

const api = (function () {
    
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaeltaylor';

    const getItems = function (callBack) {
        
        $.getJSON(`${BASE_URL}/items`, callBack);
    };

    const createItems = function (name, callBack) {
        const newItem = JSON.stringify({"name": name});
        $.ajax({
            url : `${BASE_URL}/items`,
            method: 'POST',
            contentType: 'application/json',
            data: newItem,
            success: callBack,
            
    })
    }
    const updateItem = function(itemID, updateData, callBack){
            $.ajax({
                url : `${BASE_URL}/items/${itemID}`,
                method: 'PATCH',
                contentType: 'application/json',
                data: JSON.stringify(updateData),
                success: callBack,

            })
    }
    return{getItems,createItems, updateItem}

}());