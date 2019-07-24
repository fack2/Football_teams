const input = document.getElementById("search");
const search = document.getElementById("submit");

function req(url, cb) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return cb(null, data);
    })
    .catch(error => {
      return cb(error);
    });
}

search.addEventListener("click", event => {
  event.preventDefault();
  if (input.value === "") {
    alert("please enter the country");
  } else {
    const countrytext = input.value;
    return req(`/search=${countrytext}`, (err, data) => {
      if (err) return console.log(err);
    });
  }
});
