var log = console.log;

function add(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

function mul(a,b){
  return a*b;
}

log(add(1,2));
log(sub(3,4));
log(mul(9,8));


function identityf(a){
  return function(){
    return a;
  }
}

var three=identityf(3);
log(three());

function addf(a){
  return function(b){
    return a+b;
  }
}

log(addf(3)(4));

function liftf(binaryFn){
    // return callback(a,b);
  return function (first) {
    return function (second) {
      return binaryFn(first, second);
    }
  }
}

var addf = liftf(add);
log(addf(7)(7));

function curry(binaryfn,first){
  return function(second){
    return binaryfn(first,second)
    }
  }
var add3 =curry(add,3)
log(add3(4))

var mul5 =curry(mul,5)
log(mul5(5))

var inc= addf(1)
log(inc(1));

var inc=liftf(add)(1)
log(inc(1));

var inc=curry(add,1)
log(inc(1));

function twice(binary){
  return function (a){
    return binary(a,a)
  }
}

var doubl=twice(add)
log(doubl(7))

var square=twice(mul)
log(square(9))
