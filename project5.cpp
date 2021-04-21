// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

#include <iostream>
#include <vector>

int divisible (){
    int temp = 0;
    for (int number = 10; true; number++){
        for (int i = 1; i <= 20; i++){
            if (number%i == 0){
                temp = temp + 1;
                if (temp == 20){
                    return number;
                }
            }
            else{
                break;
            }
        }
        temp = 0;
    }
}
int main (){
    std::cout << divisible() << std::endl;
}