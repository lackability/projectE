// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

#include <iostream>
#include <cmath>

int primeFinder(){
    int temp = 0;
    for (int i = 2; true; i++){
        for (int g = 2; g <= sqrt(i); g++){
            if (i % g != 0){
                temp += 1;
                if (temp = 10001){
                    return i;
                }
            }
        }
    }
}



int main(){
    std::cout << primeFinder() << std::endl;
}