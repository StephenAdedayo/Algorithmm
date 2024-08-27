// iteration or looping

const numbers = [45, 34, 76, 37, 23, 46, 10, 5, 2, 68]
let sum = 0

// numbers.forEach(num => {
//    sum += num
// })

// console.log(sum);

for(i = 0; i < numbers.length; i++){
   sum += numbers[i]
}

console.log(sum);


// linear search 
const users = [
    
   {
      id: 1,
      name:'Steve',

   },

   {
      id: 2,
      name:'BossBaby',
      
   },

   {
      id: 3,
      name:'Olaitan',
      
   },
   {
      id: 4,
      name:'Oreva',
      
   }

]


const searchByName = (name) => {
   
   return users.find(user => user.name === name)

}

console.log(searchByName('Oreva'));

// binary search

const binarySearch = (arr, target) => {
    
   let left = 0
   let right = arr.length - 1
   
   while(left <= right){
       const mid = Math.floor((left + right)/2)

       if(arr[mid] === target){
         return mid
       } else if(arr[mid] < target){
         left = mid + 1
       } else{
         right = mid - 1
       }
   }
 
   return -1
   

}

const sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const target = 7
console.log(binarySearch(sortedArray, target));




// bubble sort 

const products = [

  {
   name: 'Beans',
   price: 1000
  },

  {
   name: 'Bread',
   price: 500
  },

  {
   name: 'Water',
   price: 600
  }

]


const sortedproducts = products.sort((a, b) => (a.price) - (b.price))

console.log(sortedproducts);

// merge sort

const mergeSort = (arr) => {
   if (arr.length <= 1) {
     return arr;
   }  
   
   const mid = Math.floor(arr.length / 2);
   const left = mergeSort(arr.slice(0, mid));
   const right = mergeSort(arr.slice(mid));
 
   return merge(left, right);
 };
 
 
 const merge = (left, right) => {
   let result = [];
   while (left.length && right.length) {
     if (left[0] < right[0]) {
       result.push(left.shift());
     } else {
       result.push(right.shift());
     }
   }
   return result.concat(left, right);
 };
 
 const unsortedArray = [34, 7, 23, 32, 5, 66];

 console.log(mergeSort(unsortedArray));
 


