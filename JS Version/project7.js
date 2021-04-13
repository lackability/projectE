//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//What is the 10 001st prime number?

function primeNumberFinder(){
    var count = 0
    for (var i = 2; true; i++){
        if (PrimeRibFinder(i)){
            count += 1
            if (count == 10001){
                return i
            }
        }
    }
}

function PrimeRibFinder(number){
    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            return false  //if using return true , #winner, if using return false, divisble by some other shit so its not prime fuck you
        }
    }
    return true
}

console.log(primeNumberFinder())
