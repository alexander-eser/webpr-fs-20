const I = x => x;
const K = x => y => x;
const KI = K(I);
const T = K;
const F = KI;
const and = p => q => p(q)(p);

document.writeln("Test 3:");

//document.writeln("Q7 4P:");
//error
const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const oneTwo = pair(1)(2);
//error:    fst(oneTwo) = 0;
document.writeln(fst(oneTwo) === 0);


// false
const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const oneTwo = pair(1, 2);
document.writeln(fst(oneTwo) === 1);


//true
const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const pairEq = a => b => fst(a) === fst(b) && snd(a) === snd(b);
const pairPlus = a => b => pair(fst(a) + fst(b))(snd(a) + snd(b));

const oneTwo = pair(1)(2);
const sum = pairPlus(oneTwo)(oneTwo);
document.writeln(pairEq(sum)(pair(2)(4)));


//true
const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const pairEq = a => b => fst(a) === fst(b) && snd(a) === snd(b);

const pairMap = f => p => pair(f(fst(p)))(f(snd(p)));

const oneTwo = pair(1)(2);
const square = x => x * x;
const result = pairMap(square)(oneTwo);
document.writeln(pairEq(result)(pair(1)(4)));


// true
const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const oneTwo = pair(1)(2);
document.writeln(fst(oneTwo) === 1);


// error
const pair = a => b => f => f(a)(b);
const fst = p => p(T);
const snd = p => p(F);

const oneTwo = pair(1)(2);
//error:    fst(oneTwo) = 0;
document.writeln(fst(oneTwo) === 1);


//document.writeln("Q8 3P:");
// true
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const person = triple;
const firstname = a;
const lastname = b;
const age = c;

const bran = person("Brendan");
const raven = bran("Stark")(16);
const eich = bran("Eich")(50);

document.writeln(age(raven) === 16);


// false
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const oneTwoThree = triple(1);

document.writeln(a(oneTwoThree) === 1);


// true
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const oneTwoThree = triple(1)(2)(3);
document.writeln(a(oneTwoThree) === 1);


// true
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const person = triple;
const firstname = a;
const lastname = b;
const age = c;

const bran = person("Brendan")("Eich")(50);

document.writeln(firstname(bran) === "Brendan");


// false
const s1 = x => y => z => x;
const s2 = x => y => z => y;
const s3 = x => y => z => z;

const triple = x => y => z => f => f(x)(y)(z);
const a = t => t(s1);
const b = t => t(s2);
const c = t => t(s3);

const person = triple;
const firstname = a;
const lastname = b;
const age = c;

const bran = person("Brendan");
const raven = bran("Stark")(16);
const eich = bran("Eich")(50);

document.writeln(firstname(bran) === "Brendan");


//document.writeln("Q9a 3P:");
// true
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("cannot divide by 0")
        : Right(num / divisor);
const result = safeDiv(1)(1);

either(result)
(msg => document.writeln(msg))
(val => document.writeln(val === 1));


// cannot divide by 0
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("cannot divide by 0")
        : Right(num / divisor);
const result = safeDiv(1)(0);

either(result)
(msg => document.writeln(msg))
(val => document.writeln(val === 1));


// nothing
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("cannot divide by 0")
        : Right(num / divisor);
const result = safeDiv(1)(0);

either(result)
(msg => document.writeln(msg));


// nothing
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("cannot divide by 0")
        : Right(num / divisor);
const result = safeDiv(1)(0);

either(result)
(msg => document.writeln(msg));


// nothing
const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);

const safeDiv = num => divisor =>
    divisor === 0
        ? Left("cannot divide by 0")
        : Right(num / divisor);
const result = safeDiv(1)(0);

either(result)
(msg => document.writeln(msg));


//document.writeln("Q9b 4P:");

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = I;
const x_ = Math.random();
const safeDiv = num => divisor =>
    divisor === 0
        ? Left("Cannot divide by 0")
        : Right(num / divisor);

const eShow = x => x(x => x)(x => "Result is: " + x)

document.writeln(eShow(safeDiv(1)(0)) === "Cannot divide by 0")
document.writeln(eShow(safeDiv(x_)(1)) === "Result is: " + x_)