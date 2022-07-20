// 007e5acd804e8400e57c455fd7d22383

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatheraApi={
    key: "007e5acd804e8400e57c455fd7d22383",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

//Analogous functions 
const searchInputBox = document.getElementById('input-box');
//Event Listner Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});
//get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//show weather eport

//date manage