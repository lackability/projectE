// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function PrimeRibFinder(number){
    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            return false  //if using return true , #winner, if using return false, divisble by some other shit so its not prime fuck you
        }
    }
    return true
}


function main(number){  //main means nothing but its just main 
    var totalNumber = 0
    for (var i = 2; i <= number; i++){
        if (PrimeRibFinder(i)){
            totalNumber += i
        }
    }
    return totalNumber
}

console.log(main(2000000))