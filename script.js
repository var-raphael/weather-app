function getWeather() {
  const city = document.getElementById("citySelect").value;
  const result = document.getElementById("weatherResult");

  if (city === "") {
    result.innerHTML = "Please select a city.";
    return;
  }

  const apiKey = "24f6a4a0becb4ce8d0893727fceacbf3"; 
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const name = data.name;
      const country = data.sys.country;

      result.innerHTML = `
        <h2>${name}, ${country}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${desc}</p>
      `;
    })
    .catch(error => {
      result.innerHTML = `Error: ${error.message}`;
    });
}