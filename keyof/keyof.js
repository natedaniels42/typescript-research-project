"use strict";
const myOrder = {
    starter: 'salad',
    entre: 'pasta',
    drink: 'pepsi',
    dessert: 'ice cream'
};
function changeMenu(order, orderEntry, change) {
    order[orderEntry] = change;
}
document.addEventListener('DOMContentLoaded', e => {
    var _a;
    (_a = document.getElementById('orderChangebtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', e => {
        e.preventDefault();
        let orderItem = document.getElementById('orderItem').value;
        let newItem = document.getElementById('newitem').value;
        console.log(orderItem);
        console.log();
        let output = document.getElementById('orderResults').value;
        //changeMenu(myOrder,orderItem,newItem);
        switch (orderItem) {
            case 'starter':
                changeMenu(myOrder, orderItem, newItem);
                break;
            case 'entre':
                changeMenu(myOrder, orderItem, newItem);
                break;
            case 'drink':
                changeMenu(myOrder, orderItem, newItem);
                break;
            case 'dessert':
                changeMenu(myOrder, orderItem, newItem);
                break;
        }
        document.getElementById('orderResults').value = `myOrder now consists of : 

starter: ${myOrder.starter};
entre: ${myOrder.entre};
drink: ${myOrder.drink};
dessert: ${myOrder.dessert};`;
    });
});
