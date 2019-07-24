const input = document.getElementById("search");
const search = document.getElementById("submit");
const sec = document.getElementById("sec");
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
      else {
        console.log("data fe", data);
        let ul = document.createElement("ul");
        ul.setAttribute("id", "list");
        ul.textContent = "";
        let details;
        details = document.createElement("div");
        details.setAttribute("class", "detials");
        data.forEach(e => {
          let li = document.createElement("li");
          li.setAttribute("class", "item");
          let teamName = document.createTextNode(e.team_name);
          let show = document.createElement("Button");
          show.innerText = "click";
          show.setAttribute("class", "showBtn");
          li.appendChild(teamName);
          li.appendChild(show);
          let counter = 0;
          show.addEventListener("click", function(ev) {
            if (counter % 2 == 0) {
              counter++;
              ev.preventDefault();

              details.textContent = "";
              let logo = document.createElement("img");
              logo.setAttribute("class", "image");
              logo.src = e.logo;
              details.appendChild(logo);
              let description = document.createElement("p");
              description.setAttribute("class", "para");
              description.innerText = e.description;
              details.appendChild(description);
              console.log("DETAILS IS=", details);
              li.appendChild(details);
            } else {
              details.textContent = "";
              counter--;
            }
          });
          ul.appendChild(li);
        });

        sec.appendChild(ul);
      }
    });
  }
});
