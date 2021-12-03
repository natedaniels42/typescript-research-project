interface MealOrder {
    starter: string;
    entre: string;
    drink: string;
    dessert: string
}

const myOrder: MealOrder = {
    starter: 'salad',
    entre: 'pasta',
    drink: 'pepsi',
    dessert: 'ice cream'
}

function changeMenu(order:MealOrder, orderEntry: keyof MealOrder, change:string){
order[orderEntry] = change;
}



document.addEventListener('DOMContentLoaded', e => {

    document.getElementById('orderChangebtn')?.addEventListener('click', e => {
        e.preventDefault();
        
        let orderItem:string = (<HTMLInputElement>document.getElementById('orderItem')).value;
        let newItem:string = (<HTMLInputElement>document.getElementById('newitem')).value;
        console.log(orderItem)
        console.log()
        let output = (<HTMLInputElement>document.getElementById('orderResults')).value;
        //changeMenu(myOrder,orderItem,newItem);
        switch (orderItem){
            case 'starter':
                changeMenu(myOrder,orderItem,newItem);
            break;
            case 'entre':
                changeMenu(myOrder,orderItem,newItem);
            break;
            case 'drink':
                changeMenu(myOrder,orderItem,newItem);
            break;
            case 'dessert':
                changeMenu(myOrder,orderItem,newItem);
            break;
        }

        (<HTMLInputElement>document.getElementById('orderResults')).value = `myOrder now consists of : 

starter: ${myOrder.starter};
entre: ${myOrder.entre};
drink: ${myOrder.drink};
dessert: ${myOrder.dessert};`
        
    })
})