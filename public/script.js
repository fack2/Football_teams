const input = document.getElementById("search");

const search = document.getElementById("submit");

const req = (url, cb) => {
  fetch(url)
    .then(response => response.json())
    .then(data => cb(data))
    .catch(error => error);
};

req("/search", data => {
  if (input.value === "") {
    alert("please enter the country");
  }
});

//
// search.addEventListener("click", event => {
// if (input.value === "") {
// alert("please enter the country");
// } else {
// input.textContent = "";
// fetch(/search ${input.value})
// .then(response => {
// return response.json();
// })
// .then((data)=>{
// data.forEach(element => {
//
//
//
//       });
//   });
// }
// });
