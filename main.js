// 1 - masala;

// function hello(arr) {
//   let a = new Map();
//   arr.forEach((element) => {
//     if (a.has(element)) {
//       console.log("first");
//       let neww = a.get(element) + 1;
//       a.set(element, neww);
//     } else {
//       console.log("second");
//       a.set(element, 1);
//     }
//   });
//   return a;
// }

// let arr = ["hello", "my", "new", "world", "world"];
// let res = hello(arr);
// console.log(res);
// res.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });




// 2 - masala;
// function hello(arr) {
//   let a = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (a.has(arr[i])) {
//       let neww = a.get(arr[i]) + 1;
//       a.set(arr[i], neww);
//     } else {
//       a.set(arr[i], 1);
//     }
//   }
//   return a;
// }

// let arr = "hello";
// let res = hello(arr);
// console.log(res);
// res.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });


// 6 - masala;
// function hello(arr1, arr2) {
//   let n = arr1.length;
//   if (arr1.length > arr2.length) {
//     n = arr2.length;
//   }
//   let result = new Map();
//   for (let i = 0; i < n; i++) {
//     result.set(arr1[i], arr2[i]);
//   }
//   return result;
// }
// let arr1 = [1, 2, 3];
// let arr2 = ["first", "second", "third"];
// respond = hello(arr1, arr2);
// console.log(respond);


// 7 - masala;
// function hello(key, numbers) {
//   let result = new Map();
//   result.set(key, 0);
//   numbers.forEach((number) => {
//     let new_value = result.get(key) + number;
//     result.set(key, new_value);
//   });
//   return result;
// }
// let numbers = [1, 2, 3, 4, 5, 6];
// answer = hello("sum", numbers);
// console.log(answer);



// 1 - setMasala;
// let numbers = [1, 2, 3, 1, 3, 1];
// let uniques = new Set(numbers);
// numbers = Array.from(uniques);
// console.log(numbers);


// 1 - setMasala;
// let numbers = [1, 2, 3, 1, 3, 1];
// let uniques = new Set(numbers);
// numbers = Array.from(uniques);
// console.log(numbers);


// 3 - setMasala;
// function sorting(set1) {
//   set1 = Array.from(set1);
//   set1.sort();
//   return new Set(set1);
// }
// let set1 = new Set([2, 4, 45, 1]);
// set1 = sorting(set1);
// console.log(set1);


// 5 - setMasala;
// function resulter(arr1, arr2) {
//   let i = 0,
//     j = 0,
//     n = arr1.length,
//     m = arr2.length;
//   let answer = new Set();
//   while (i < n || j < m) {
//     if (i < n && !arr2.includes(arr1[i])) {
//       answer.add(arr1[i]);
//     }
//     if (j < m && !arr1.includes(arr2[i])) {
//       answer.add(arr2[j]);
//     }
//     i++;
//     j++;
//   }
//   return answer;
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// console.log(resulter(arr1, arr2));



// 7 - setMasala;
// function resulter(arr1, arr2) {
//   let set1 = new Set(arr1.concat(arr2));
//   return set1;
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];
// console.log(resulter(arr1, arr2));


// 8 - setMasala;
// function resulter(arr1, element) {
//   let set1 = new Set(arr1);
//   for (let number of set1) {
//     if (number == element) {
//       return true;
//     }
//   }
//   return false;
// }
// let arr1 = [1, 2, 3, 4, 5];
// console.log(resulter(arr1, 2));



// 9 - setMasala;
// function resulter(arr1) {
//   arr1 = Array.from(new Set(arr1));
//   return arr1;
// }
// let arr1 = [1, 2, 3, 3, 2, 3, 4, 5];
// console.log(resulter(arr1));




// 10 - setMasala;
// function resulter(arr1, arr2) {
//   let uniques = new Set(arr1.concat(arr2));
//   let answers = new Array();
//   for (let elem of uniques) {
//     if (arr1.includes(elem) && arr2.includes(elem)) {
//       answers.push(elem);
//     }
//   }
//   return answers;
// }
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [4, 5, 6, 7, 8, 9];
// console.log(resulter(arr1, arr2));
