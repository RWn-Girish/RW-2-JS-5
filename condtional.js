// conditonal => if , if else,  ternory (con ? true: false), nested ifelse, ladder if else

/*
    if(condition){
       ... statement
    }else if(condition){
            ... statement
        }
    else{
        ... statement
    }
*/

// three variable => smallest value

let a = 10, b = 22, c = 150;

// if(a<b){
//     if(a<c){
//         console.log("Value is smllest: " ,a);
//     }else{
//         console.log("Smallest Value is : " ,c);
//     }
// }else{
//     if(b<c){
//         console.log("smaller Val is : " ,b);
//     }else{
//         console.log("Small Value is : " ,c);
//     }
// }

// if(a<b && a<c){
//     console.log('Smallest no is: ', a);
// }
// else if(b<c){
//     console.log('Small no is: ', b);
// }else{
//     console.log("Smaller no is: ", c);
// }

/* 
    Switch(condition){
        case :
            break;
        default:
            break;
    }


    90+ => A
    80 to 90 => B
    70-80 => C
    60-70 => D
    35-60 => Pass
    below 35 => Fail
*/


// let num1 , num2 , choice;            //  100
// num1 = Number(prompt("Enter Num1"));
// num2 = Number(prompt("Enter Num2"));
// choice = prompt("Enter Your Choice");


// switch (choice) {
//     case "Add":
//             console.log("Addition is: ", num1 + num2);
//             break;
//     case "Sub":
//             console.log("Substract is: ", num1 - num2);
//             break;
//     case "Product":
//             console.log("Product is: ", num1 * num2);
//             break;
//     case "Division":
//             console.log("Division is: ", num1 / num2);
//             break;
//     default:
//         console.log('Wrong Choice!!!!');
//         break;
// }

//      90+ => A
//     80 to 90 => B
//     70-80 => C
//     55-70 => D
//     35-55 => Pass
//     below 35 => Fail

// let marks ;

// marks = Number(prompt("Enter Your Marks"));

// if(marks >= 90){
//     console.log('Your Grade is A')
// }
// else if(marks>=80 && marks < 90){
//     console.log('Your Grade is B')
// }
// else if(marks>=70 && marks < 80){
//     console.log('Your Grade is C')
// }
// else if(marks>=55 && marks < 70){
//     console.log('Your Grade is D')
// }
// else if(marks>=35 && marks < 55){
//     console.log('You are Pass!!!')
// }else{
//     console.log('Sorry, have nice to meet you once again')
// }



// console.log("11" + 5);
// console.log("11" - 5);
// console.log("11" * 5);
// console.log("11" / 5);

// console.log(11 + "5");
// console.log(11 - "5");
// console.log(11 * "5");
// console.log(11 / "5");

// console.log(11 + "A");
// console.log(11 - "A");
// console.log(11 * "A");
// console.log(11 / "A");
// console.log(typeof (11 / "A"));
