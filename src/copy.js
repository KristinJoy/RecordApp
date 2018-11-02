/*
  Looks like this file is ready to be deleted!
*/

const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = "https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png"
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var records = response.records;
    var output = "";
    for (var i = 0; i < records.length; i++) {
      output += '<li>'+records[i].title+'<li>';
    }
    document.getElementById("jsonTest").innerHTML = output;
  }
};

xhttp.open('GET', 'records.json', true);
xhttp.send();
request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}..`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();
