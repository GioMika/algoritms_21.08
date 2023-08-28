


// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256




// let arr_1 = [100 ,112, 256, 349, 770]
// let arr_2 =   [72, 86 ,113 ,119 ,265 ,445, 892]

// let array = arr_1.concat(arr_2)

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pitovIndex = Math.floor(arr.length / 2);
//   let pivot = arr[pitovIndex];
//   let left = [];
//   let rigt = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === pitovIndex) {
//       continue;
//     }
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       rigt.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(rigt)];
// }

// console.log(quickSort(array));
// const sortArray = quickSort(array);


// function serchItem(array,k) {
// for(let i = 0;i < array.length; i++) {
// if(i === k -1) {
// return  console.log(array[i]);
// }
// }
// }
// serchItem(sortArray,7);



// Решите задачу: Расставьте в алфавитном порядке буквы. Разрешается использование техники Разделяй и властвуй. Полученные данные напечатайте.
//   На вход строка: "poiuytrewqlkjhgfdsamnbvcxz"
// На выходе должно быть: ABCDEFGHIJKLMNOPQRSTUVWXYZ (с большой буквы)


// let array = "poiuytrewqlkjhgfdsamnbvcxz";

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pitovIndex = Math.floor(arr.length / 2);
//   let pivot = arr[pitovIndex];
//   let left = [];
//   let rigt = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === pitovIndex) {
//       continue;
//     }
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       rigt.push(arr[i]);
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(rigt)];
// }

// console.log(quickSort(array));
// const sortArray = quickSort(array);
// console.log(sortArray.join(" ").toUpperCase());

