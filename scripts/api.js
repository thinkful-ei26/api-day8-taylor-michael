'use strict'

const api = (function () {
    
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaeltaylor';

    const getItems = function (callback) {
        
        $.getJSON(`${BASE_URL}/items`, callback);
    };

    const createItems = function (name) {
        const newItem = JSON.stringify(name);
        $.ajax({
            url : `${BASE_URL}/items`,
            method: 'POST',
            contentType: 'application/json',
            data: newItem,
            success 
    })
    }

    return{getItems,}

}());