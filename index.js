
function receivesAFunction(callback) {
    callback();
};
function returnsANamedFunction() {
    function namedFunction() {
        console.log(`Named function`);
    }
    return namedFunction;
    }
    
    
    function returnsAnAnonymousFunction() {
    function gsm(message) {
        console.log(`Deeply satisfying`);
    }
    return gsm;

}

