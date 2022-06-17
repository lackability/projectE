// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

#include <iostream>
#include <vector>
#include <cmath>


int twentyDivisible(){
    int increment = 20;
    int answerCheck = 0;
    for (int g = 20; true; g += increment){
        for (int i = 1; i <= 20; i++){
            if (g % i == 0){
                answerCheck += 1;
                if (answerCheck == 20){
                    return g;
                }
            }
        }
        answerCheck = 0;
    }
}

int main(){
    std::cout << twentyDivisible() << std::endl;
}