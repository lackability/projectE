// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
newList = []
function triplet(){
    for (var a = 1; a < 1000; a++){
        for (var b = 2; b < 1000; b++){
            for (var c = 3; c < 1000; c++){
                if (a < b && (b < c)){
                    if (a**2 + b**2 == c**2){
                        if (a+b+c == 1000){
                            newList.push(`${a},${b},${c}`)
                        }
                    }
                }
            }
        }
    }
    return newList
}

console.log(triplet())