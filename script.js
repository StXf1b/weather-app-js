
function submit() {
    // Define a few variables that will be the latitude longitute and temp.
    let lat;
    let lon;
    let temp;
    const tempCity = document.getElementById("temp"); // Get the element to display temperature!
    const cityName = document.getElementById("cityName"); // Get the element to display the city!
    const city = document.getElementById("city").value; // get the value of the input on click!
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=5a2280bbbd9fc4f3d7dd2ac5922f95fc`) // Get the data for the city from the input
            .then(response => response.json())
            .then((data) => { // Data we get from the api call!
                lat = data[0].lat; // We specify the lat and lon to the variable drom the data we gen from api.
                lon = data[0].lon; // lon
                fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a2280bbbd9fc4f3d7dd2ac5922f95fc`) // Once we got the lat and lon we use them as variables in here!
                    .then(response => response.json())
                    .then((data) => { // Data we get from the api call!
                        temp = Math.floor(data.main.temp - 273.15); // we get the temp from the api and then convert it from kelvin tu celcius and get a holo nr with math floor!
                        tempCity.innerText = temp + " °C"; // Display the temp! 
                        cityName.innerText = city; // Display the city!
                        })
            });
        }

const cityEnter = document.getElementById("city").addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        submit();
        e.preventDefault();
    }
})