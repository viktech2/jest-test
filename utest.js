const someOrder = {
    items:[
        {name: 'A', price: 50},
        {name: 'B', price: 40}
    ]
};

const orderTotal = (order) => {
    return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0);
}

if(orderTotal(
    {
        items:[
            {name: 'A', price: 50},
            {name: 'B', price: 40}
        ]
    }   
) !== 90){
    throw new Error('Check failed 1');
}


if(orderTotal(
    {
        items:[
            {name: 'A', price: 3, quantity: 2}
        ]
    }   
) !== 6){
    throw new Error('Check failed 2');
}



let result = orderTotal(someOrder);




