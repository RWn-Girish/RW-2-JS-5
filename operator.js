/*
        arithmatic => + - * / % ++ -- **
        conditional => < <= > >= ==  != === !==

                    ==  => only check the value
                    ===  => check the value & datatype (strict)

        Assignment (short hand Prop) => += -= *= /= %= **=
                a += b => a = a + b

        logical Operator => && || !

        1  2      &&    ||(pipe)   ^(xor)
        f  f      F(0)     F         0
        f  t      F        T         1
        t  f      F        T         1
        t  t      T(1)     T         0
*/

let x = 15, y = '7';
console.log(typeof x)
console.log(typeof y)

// console.log("addition => ", x + y);
// console.log("Substraction => ", x - y);
// console.log("Product => ", x * y);
// console.log("Divsion => ", x / y);
// console.log("Reminder => ", x % y);

// console.log(x++);       // 15   16
// console.log(++x);       // 15   16
// console.log(x);

// console.log(5**3)


// console.log(10  === "10")
// console.log(10  != "10")

// console.log(x)
// x += y
// console.log(x)

// let a = 1, b = 1;
// console.log(a && ++b)
// console.log(a || ++b)
// console.log(a,"        " ,b);      // 0 2