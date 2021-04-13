// The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 ... + 10^2  =385
// The square of the sum of the first ten natural numbers is, (1 + 2.. 10)^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function findNumber100(){   //first part
    var temp = 0    //temps
    for (var i = 1; i <= 100; i++){     //gets all values 1-100
        temp += i**2    //adds i^2 to each value of increasing I
    }
    return temp
}
function findNumber100Sum(){ // 2nd part
    var temp = 0    //temps
    for (var i = 1; i <= 100; i++){
        temp += i   //adds all numbers of i together to one variable
    }
    var newTemp = temp**2   //creating new variable for a number
    return newTemp

}

console.log(findNumber100Sum()-findNumber100())