/*
To create a proxy object, we use the Proxy constructor - new Proxy();. The proxy constructor takes two items:

the object that it will be the proxy for
an object containing the list of methods it will handle for the proxied object
The second object is called the handler.
*/

// var richard = {status: 'looking for work'};
// var agent = new Proxy(richard, {});

// console.log(agent.status); // returns 'looking for work'

// const richard = {status: 'looking for work'};
// const handler = {
//     get(target, propName) {
//         console.log(target); // the `richard` object, not `handler` and not `agent`
//         console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
//         return target[propName];
//     }
// };
// const agent = new Proxy(richard, handler);
// agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)

const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay

//EC5
var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};

//EC6
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4