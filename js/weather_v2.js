/* Este código fue desarrollado a partir de varias ideas encontradas en la red y de diferentes lugares.
Contiene comentarios de instrucciones útiles para el proceso de desarrollo.
Contiene restos de ideas para modificaciones posteriores.
Todavía está verde pero funciona*/

/* Primero se busca la localización. Esto tarda mucho. Si no se encuentra no hace nada. 
Si se encuentra se almacena en session storage para usos posteriores en las otras páginas.
Luego se busca el estado del tiempo para esa localizacion y si está todo bien se muestra al lado del logo
Se podría hacer lo mismo con el estado del tiempo y almacenarlo en session storage. Esto todavia no está implementado.*/

/*Para consultar el tiempo usa una clave mia que solo funciona un nro chico de veces por mes. Y lo hace cada vez que se hace click en la página.*/

const weatherInfoDiv = document.querySelector('div.weather'),
    weatherInfoTxt = document.querySelector('div.weather p'),
    weatherIcon = document.querySelector('div.weather img'),
    temp_numbTxt = document.querySelector('div.weather span.numb');

let api;

// if ("username" in localStorage) {
//     alert('yes');
// } else {
//     alert('no');
// }
//(Date.now()-a)/1000
let latitude, longitude;

getLocation();

function getLocation() {
    //weatherInfoTxt.innerText="Hola"
    const options = {
        //enableHighAccuracy: true,
        // timeout: 20000,
        maximumAge: Infinity
    };
    if ("coords" in sessionStorage) {
        //console.log("Hola si")
        let pos = JSON.parse(sessionStorage.coords);
        //Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}
        posObj = { coords: { latitude: pos[0], longitude: pos[1] } };

        onSuccess(posObj);
    } else {
        //console.log("Hola no")
        //weatherInfoTxt.innerText = 'Getting location...';
        weatherInfoTxt.classList.add('location');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
        } else {
            alert('Your browser does not support geolocation api')
        }
    }
}

function onSuccess(position) {
    weatherInfoTxt.classList.remove('location');
    const { latitude, longitude } = position.coords;

    sessionStorage.setItem("coords", JSON.stringify([latitude, longitude]));

    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=c93b4a667c8c9d1d1eb941621f899bb8`
    fetchData();
}

function onError(error) {
    //weatherInfoTxt.innerText = error.message;
    //alert("No se pudo obtener la geolocalización.\nEl tiempo no se mostrará.")
    weatherInfoTxt.classList.add('error');
}

function fetchData() {
    //weatherInfoTxt.innerText = 'Getting weather details...';
    weatherInfoTxt.classList.add('pending');
    fetch(api).then(response => response.json()).then(result => weatherDetails(result))
    .catch(error => errorTiempo(error));
}
function errorTiempo(err){
    //alert("Ocurrio un error al buscar el tiempo:"+ err)
}
function weatherDetails(info) {
    if (info.cod == '404') {
        //weatherInfoTxt.innerText = `error 404 isn't a valid city name`;
        weatherInfoTxt.classList.replace('pending', 'error');
    } else {
        //const city = info.name;
        //const country = info.sys.country;
        const { description, id } = info.weather[0];
        const { feels_like, humidity, temp } = info.main;

        if (id == 800) {
            weatherIcon.src = './images/weather_icons_night/01n@2x.png'; //clear sky
        } else if (id == 801) {
            weatherIcon.src = './images/weather_icons_night/02n@2x.png'; //few clouds
        } else if (id == 802) {
            weatherIcon.src = './images/weather_icons_night/03n@2x.png'; //scattered clouds
        } else if (id >= 803 && id <= 804) {
            weatherIcon.src = './images/weather_icons_night/04n@2x.png'; //broken clouds
        } else if (id >= 200 && id <= 232) {
            weatherIcon.src = './images/weather_icons_night/11n@2x.png'; //thunderstorm
        } else if (id >= 300 && id <= 321) {
            weatherIcon.src = './images/weather_icons_night/09n@2x.png'; //shower rain
        } else if (id >= 500 && id <= 531) {
            weatherIcon.src = './images/weather_icons_night/10n@2x.png'; //rain
        } else if (id >= 600 && id <= 622) {
            weatherIcon.src = './images/weather_icons_night/13n@2x.png'; //snow
        } else if (id >= 701 && id <= 781) {
            weatherIcon.src = './images/weather_icons_night/50n@2x.png'; //mist
        }

        //let getCountryNames = new Intl.DisplayNames(['en'], { type: 'region' });
        //const fullnameCountry = getCountryNames.of(country);


        temp_numbTxt.innerText = Math.round(temp * 10) / 10;

        weatherInfoTxt.classList.remove('pending', 'error');
        weatherInfoDiv.classList.add('active');
    }

}
