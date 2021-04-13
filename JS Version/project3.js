//LOL
// prime factors, what is largest prime factor of 600851475143
var TimerLol = Date.now()
function BossBaby(number){
    var list = []
    for(var i = 0; i <= Math.sqrt(number); i++){  //using .sqrt just to use less numbers so process goes faster
        if(number % i == 0){
            list.push(i)
        }
    }
    return list
}
var TimerLol1 = Date.now()      //time after bossbaby done (ver 1, when this was the only blah)
console.log(TimerLol1 - TimerLol)

function PrimeRibFinder(number){
    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            return false  //if using return true , #winner, if using return false, divisble by some other shit so its not prime fuck you
        }
    }
    return true
}
//for (var i = 1; i <= 10; i++){    //test for which numbers 1-10 are prime , when its true it is prime, and false = not prime
 //   console.log(PrimeRib(i))
//}


var listE = []  
var listK = BossBaby(600851475143)  // listK = the factors of "x" number
for (var k = 0; k < listK.length; k++){ 
    if (PrimeRibFinder(listK[k])){    // PrimeRib returns the value of a certain number/list and tells whether it is true/false
        listE.push(listK[k])      // pushes to listE the values which are true
    }
}

console.log(listE)



