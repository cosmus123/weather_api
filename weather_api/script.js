document.getElementById('button').addEventListener('click', loadData);

let input_country = document.getElementById('input');


function loadData() {
    const xhr = new XMLHttpRequest();

    const first_url = '...';
    let city_url = input_country.value;
    const last_url = '...';
    const url = first_url + city_url + last_url;

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        let response = JSON.parse(this.responseText);

        let city_01 = document.getElementById('c_01');
        city_01.innerText = response.name;

        let city_02 = document.getElementById('c_02');
        city_02.innerHTML = response.sys.country;

        let city_03 = document.getElementById('c_03');
        city_03.innerHTML = response.coord.lon;

        let city_04 = document.getElementById('c_04');
        city_04.innerHTML = response.coord.lat;

        let city_05 = document.getElementById('c_05');
        city_05.innerHTML = response.weather[0].main;

        let city_06 = document.getElementById('c_06');
        city_06.innerHTML = response.main.temp;

        let city_07 = document.getElementById('c_07');
        city_07.innerHTML = response.main.pressure;

        let city_08 = document.getElementById('c_08');
        city_08.innerHTML = response.main.humidity;

        let city_09 = document.getElementById('c_09');
        city_09.innerHTML = response.main.temp_min;

        let city_10 = document.getElementById('c_10');
        city_10.innerHTML = response.main.temp_max;

        let city_11 = document.getElementById('c_11');
        city_11.innerHTML = response.wind.speed;

        let city_12 = document.getElementById('c_12');
        city_12.innerHTML = response.wind.deg;

        document.getElementById('output').innerHTML = "<div class='jumbotron'>" + this.responseText + "</div>";
        document.getElementById('output').innerHTML = "<textarea cols='150' rows='7'>" + this.responseText + "</textarea>";
    }



    xhr.onerror = function() {
        console.log('Request error..')
    }
    xhr.send();
}
