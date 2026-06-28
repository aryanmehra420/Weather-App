const apiKey = '*******************';


async function getWeather(){
    
    const city = document.getElementById('search').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    
    let response = await fetch(url)
    const data = await response.json()

        if (!response.ok) {
        document.getElementById("cityname").innerText = "City Not Found";
        document.getElementById("temp").innerText = "--";
        document.getElementById("wthr").innerText = "--";
        document.getElementById("humidindex").innerText = "--";
        document.getElementById("feelindex").innerText = "--";
        return;
        }
    
    document.getElementById('cityname').innerText = data.name;

    document.getElementById("datetime").innerText = new Date().toDateString();

    document.getElementById("temp").innerText = `${data.main.temp} °C`;

    document.getElementById("wthr").innerText = data.weather[0].main

    document.getElementById("humidindex").innerText = data.main.humidity

    document.getElementById("feelindex").innerText = `${data.main.feels_like} °C`;



    console.log(data)   
}

    

document.getElementById('btn').addEventListener('click', getWeather);

