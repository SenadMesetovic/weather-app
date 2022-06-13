// // Promises

// //3 states: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = true;
//   if (!error) {
//     resolve("Yes! Resolved the promise!");
//   } else {
//     reject("No! Rejected the promise");
//   }
// });

// // console.log(myPromise);

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   });

//Callbacks

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
