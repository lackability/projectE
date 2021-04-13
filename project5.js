//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function divisibleMoney(){
    for (var i = 1; true; i++){     //infinite loop
        var count = 0   //setting count for how many numbers "i" can be divislbe by, can also reset it through each iteration of "I"
        for (var g = 1; g <= 20; g++){  //loop is looking for all values between 1-20 (FOR DIVIDING SANDVICH_weapon)
            if (i % g == 0){    //moduLOL
                count += 1   //increases count by one 
            }
            else{
                break;  //breaks line before it reaches 20 on the count, basically will exit for loop when one part of the sequence is not true. I.E. i % g == 4084104.1
            }       
        }
        if (count == 20){   //if then okay
            return i    //give
        } 
    }
}
console.log(divisibleMoney())