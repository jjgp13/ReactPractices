/*
A JavaScript Promise is created with the new Promise constructor function - new Promise(). 
A promise will let you start some work that will be done asynchronously and let you get back to your regular work. 
When you create the promise, you must give it the code that will be run asynchronously. 
You provide this code as the argument of the constructor function:
*/

new Promise(function (resolve, reject) {
    window.setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        // if ( /* iceCreamConeIsEmpty(flavor) */ ) {
        //     reject(`Sorry, we're out of that flavor :-(`);
        // }
        resolve(sundae);
    }, Math.random() * 2000);
});