const API_KEY = "58e0ef87052397de56ba4f29f82580b1";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const fivedayurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => {
      const weatherIcon = document.querySelector("#weatherIcon");
      const weather = document.querySelector("#weatherCondition");
      const city = document.querySelector("#cityName");
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
      weatherIcon.src = iconUrl;
      weather.innerText = Math.floor(`${data.main.temp}`) + "º";
      city.innerText = data.name;
    });

  fetch(fivedayurl)
    .then((response) => response.json())
    .then((data) => {
      const fiveDayWeather = document.querySelector("#fiveDayWeather");
      for (let i = 0; i < 40; i += 8) {
        const div = document.createElement("div");
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        const weatherDay = document.createElement("span");
        const weatherDayDate = new Date(data.list[i].dt_txt);
        const weatherMonth = getEngMonth(weatherDayDate.getMonth());
        const weatherEngDays = getDay(weatherDayDate.getDay());
        const weatherDays = weatherDayDate.getDate();

        const weatherIcon = document.createElement("img");
        const iconCode = data.list[i].weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const tempDiv = document.createElement("div");
        const weatherTempMinText = document.createElement("span");
        const weatherTempMaxText = document.createElement("span");
        const weatherTempMin = Math.floor(data.list[i].main.temp_min);
        const weatherTempMax = Math.floor(data.list[i].main.temp_max);
        weatherDay.className = "weatherDay";
        weatherDay.innerText = `${weatherEngDays}, ${weatherMonth} ${weatherDays}`;
        if (weatherEngDays === "Sat") weatherDay.style.color = "#cd3534";
        if (weatherEngDays === "Sun") weatherDay.style.color = "#80a8f0";
        fiveDayWeather.appendChild(div);
        div.appendChild(weatherDay);

        weatherIcon.src = iconUrl;
        div.appendChild(weatherIcon);

        tempDiv.className = "tempDiv";
        div.appendChild(tempDiv);
        weatherTempMinText.className = "weatherTempMin";
        weatherTempMinText.innerText = `${weatherTempMin}` + "º";
        tempDiv.appendChild(weatherTempMinText);
        weatherTempMaxText.className = "weatherTempMax";
        weatherTempMaxText.innerText = `${weatherTempMax}` + "º";
        tempDiv.appendChild(weatherTempMaxText);

        function getDay(date) {
          switch (date) {
            case 0:
              return "Sun";
            case 1:
              return "Mon";
            case 2:
              return "Tue";
            case 3:
              return "Wed";
            case 4:
              return "Thu";
            case 5:
              return "Fri";
            case 6:
              return "Sat";
          }
        }

        function getEngMonth(date) {
          return monthNames[date - 1];
        }
      }
    });
}

function onGeoError() {
  alert("Can't find u");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
