import { sum } from './sum';


//To test specific file - $ npm test -- sum

describe('Sum()', ()=>{

    it('add two numbers', ()=>{
        expect(sum(2,3)).toBe(5);
    })
})