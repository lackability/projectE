// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

#include <iostream>
#include <vector>
#include <cmath>

std::vector<int> returnFacts(long int number){
    std::vector<int> vec;
    for (long int i = 1; i <= sqrt(number); i++){
        if (number % i == 0){
            vec.push_back(i);
        }
    }
    return vec;
}

bool isPrime(int i){
    long int temp = 0;
    for (long int number = sqrt(i) ; number >= 2; number--){
        if (i % number == 0){
            return false;
        }
    }
    return true;
}

int main(){ 
    long int temp = 0;
    for (int number = 0; number < returnFacts(600851475143).size(); number++){
        if (isPrime(returnFacts(600851475143)[number])){
            if (temp < returnFacts(600851475143)[number]){
                temp = (returnFacts(600851475143)[number]);
            }
        }
    }  
    std::cout << temp << std::endl;

}
