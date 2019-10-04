let temperatureNis = document.getElementById("temNis");

function load(lat, long) {
  const proxy = "http://cors-anywhere.herokuapp.com/";
  const api = `${proxy}https://api.darksky.net/forecast/fb4c116f915c61742654d62a921fffa2/${lat},${long}`;

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      const { temperature, summary, icon } = data.currently;
      temperatureC = (((temperature - 32) * 5) / 9).toFixed(0);
      console.log(temperatureC);
      temperatureNis.innerHTML = temperatureC;
    });
}

window.onload = load(43.342472, 21.90333);
