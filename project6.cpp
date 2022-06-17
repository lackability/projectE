#include <iostream> 
#include <cmath>


int naturalSquaredSum(){
    int temp = 0;
    for (int i = 1; i <= 100; i++){
        int iSquared = pow(i,2);
        temp = temp + iSquared;
    }
    return temp;
}

int naturalSumSquared(){
    int temp = 0;
    int initTotal = 0;
    for (int i = 1; i <= 100; i++){
        initTotal = initTotal + i;
    }
    int endTotal = pow(initTotal, 2);
    return endTotal;
}

int main (){
    std::cout << naturalSumSquared() - naturalSquaredSum() << std::endl;
}