//project 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

#include <algorithm> 
#include <iostream>
#include <vector>


int pMultiples(){
    for (int number1 = 1; number1 <= 99; number1++){
        int temp = 0;
        for (int number2 = 1; number2 <= 99; number2++){
            temp = number1*number2;
            if (temp){
            }
        }   return temp;
    }
}



int main(){
    std::cout << pMultiples() << std::endl;
}