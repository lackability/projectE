// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

#include <iostream>
#include <vector>

int main(){
    int total = 0;
    for (int number = 0; number < 10000; number++){
        if (600851475143 % number == 0){
            total == number;
        }
    }
    std::cout << total << std::endl;
}