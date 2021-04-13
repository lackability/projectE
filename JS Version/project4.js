//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.
function reverseString(Lol){
    var Lolz = []
    for (var i = 0; i < Lol.length; i++){
        Lolz.push(Lol[i])   //pushs characters that make up "Lol" into list Lolz
    }
    var reversing = ""
    for (var j = Lolz.length-1; j >= 0; j--){   // reversed for loop, goes from end of the list to the begigngn on length, j-- increments down
        reversing += Lolz[j]    //reversing = reversing + Lolz[j]
    }
    return reversing
}


function LiquidShit(){
    var throwAway = []
    for (var i = 999; i > 100; i--){    //for loop for the first 999 values
        for (var j = 999; j > 100; j--){        // for loop for the 2nd 999 values
            var money = j * i      // will run through and find every 999*999 - 100, 998* 999-100, ETC.
            if (reverseString(money.toString()) == money.toString()){     // checking if reverse of money is == to money
                throwAway.push(money)   //pushes to another array
            }    
        }
    }
    var temp = throwAway[0]
    for (var b = 0; b < throwAway.length; b++){
        if (throwAway[b] > temp){
            temp = throwAway[b];
        }
    }
    return temp
}


console.log(LiquidShit())   
          