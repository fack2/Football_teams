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
