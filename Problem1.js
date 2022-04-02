/*
Back to Binary
Given 2 binary numbers, print the prime numbers in 
between those 2 binary numbers.


Input You are given 2 binary numbers

Sample Input 1

Input: num1 = 101, num2 = 11111

Output
5, 7, 11, 13, 17, 19, 23, 29, 31

*/

var backBinary=function(num1,num2){
    var decinum1=parseInt(num1,2);
    var decinum2=parseInt(num2,2);
    var output="";
    for(let i=decinum1;i<=decinum2;i++){
        let flag=0;
        for(let j=2;j<i;j++){
            if(i%j==0){
                flag=1;
                break;
            }
        }
        if(i>1 && flag==0){
            output=output+i+" ";
        }
        
    }
    console.log(output)
}
backBinary(101,11111)
