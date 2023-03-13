// let data = [5, 4, 8, 5, 10, 12];

// // let newEl = 50;
// // const newPositiom = 3;

// // for (let i = data.length - 1; i >= 0; i--) {
// //   console.log(data[i]);

// //   if (i >= newPositiom) {
// //     data[i + 1] = data[i];
// //     if (i == newPositiom) {
// //       data[i] = newEl;
// //     }
// //   }
// // }

// // console.log(data);

function insertNewElement() {
  let data = [5, 4, 8, 5, 10, 12];

  let newEl = document.getElementById("newElement").value;
  const newPositiom = document.getElementById("position").value;

  for (let i = data.length - 1; i >= 0; i--) {
    console.log(data[i]);

    if (i >= newPositiom) {
      data[i + 1] = data[i];
      if (i == newPositiom) {
        data[i] = newEl;
      }
    }
  }
  console.log(data);
}

// console.log(data);
