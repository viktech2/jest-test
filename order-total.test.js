const orderTotal = require('./order-total');



/* it('works', ()=>{
    expect(1).toBe(2);
}) */

it('Quantity', () => {

    expect(orderTotal({
            items:[
                {name: 'A', price: 3, quantity: 2}
            ]
        })).toBe(6);
});


it('No Quantity', () => {

    expect(orderTotal({
            items:[
                {name: 'A', price: 50},
                {name: 'B', price: 40}
            ]
        })).toBe(90);
});
