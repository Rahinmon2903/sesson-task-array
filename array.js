//1. print the numbers from 1 to 100 with the interval of 10

for(let i=1; i<=100;i=i+10){
    console.log(i)
}
    
    


// 2. print the number from 10 to 1
for(let i=10; i>=1;i--){
    console.log(i)
}

//3. print the multiple of 2 until 10

for(let i=2; i<=10;i=i+2){
    console.log(i)
}

//4. print the number from 100 to 1 with the difference of 10.


for(let i=100; i>=1;i=i-10){
    console.log(i)
}

/* 5. write a function to print the eligble, Not eligble voters separately from the list
of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.
*/
let eligible =[];
let not_eligible =[];
let invalid =[];
let arr =[18,17,16,15,10,8,7,9,35,40,86,75,0];


function voting(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
             invalid.push(arr[i]);
        }
          else if (arr[i]>=18){
            eligible.push(arr[i]);
        }
          else{
            not_eligible.push(arr[i]);
        }
    }
}
voting(arr);

console.log(eligible)

console.log(not_eligible)

console.log(invalid)