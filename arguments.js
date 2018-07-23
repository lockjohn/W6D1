//sum function

function sum (...args) {
  let sum = 0;
  args.forEach(el => sum += el);
  return sum;
}

function  sum2 () {
  let sum = 0;
  arr = Array.from(arguments);
  arr.forEach(el => sum += el);
  return sum;
}


//myBind

Function.prototype.myBind = function () {
  console.log("this", this, "arguments", arguments);
  const that = this;
  
  return function() {
    console.log("that", that);
    console.log("this", this, "arguments", arguments);
  };
};

Function.prototype.myBind = function (ctx, ...args) {
  let that = this; 
  return function (...args2) {
    let combined = args.concat(args2);
    return that.apply(ctx, combined);
  };
};

const curriedSum = function (numArgs) {
  const numbers = [];
  let sum = 0;
  const _curriedSum = function(int) {
    numbers.push(int);
    if (numbers.length === numArgs) {
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

Function.prototype.curry = function (numArgs) {
  const args = [];
  const that = this;
  const _curry = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  };
  
  return _curry;
};

Function.prototype.currySpread = function (numArgs) {
  const args = [];
  const that = this;
  const _curry = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curry;
    }
  };
  
  return _curry;
};

//inherits

Function.prototype.inherits = function (parentClass) {
  function Surrogate () {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.move = function () {
  console.log('zoom zoom');
};

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.fly = function () {
  console.log('rockets on');
};

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.crash = function () {
  console.log('boom!');
};

