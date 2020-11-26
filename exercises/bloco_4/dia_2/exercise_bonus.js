let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Parte 1
console.log("\nOrdem crescente:")
for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let position = array[i];
  
        array[i] = array[j];
        array[j] = position;
      }
    }
  }
  console.log(array)

  // Parte 2
  console.log("\nOrdem decrescente:")
for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        let position = array[i];
  
        array[i] = array[j];
        array[j] = position;
      }
    }
  }
  console.log(array)

  // Parte 3
  array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let array2 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {  
        array2.push(array[i] * array[i+1]);
      } else {
          array2.push(array[i] * 2);
      }
  }
  console.log(array2)