var button = document.querySelector('.btn');
var inputvalue = document.querySelector('.inputvalue');
document.body.style.backgroundImage = "url('shower_rain.jpg')";


document.body.style.backgroundImage = "url('backgrounds/fewer_clouds.jpg')";

document.getElementById('stop').addEventListener('click', function () {
    document.getElementById('namevalue').style.animation = "";
    document.getElementById('temterature').style.animation = "";
    document.getElementById('description').style.animation = "";
    document.getElementById('image').style.animation = "";
    document.getElementById('namevalue').style.visibility = "hidden";
    document.getElementById('temterature').style.visibility = "hidden";
    document.getElementById('description').style.visibility = "hidden";
    document.getElementById('image').style.visibility = "hidden";
})

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=2d67cb3e75b312d45298cebcdfa4d90b')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            var name = data['name'];
            var temp = data['main']['temp'];
            var desc = data['weather'][0]['description'];
            var icon = data['weather'][0]['icon'];

            // console.log(name);
            // console.log(temp);
            // console.log(desc);
            // console.log(icon);
            // console.log(data);
            namevalue.innerHTML = "Place: " + name.toUpperCase();
            temterature.innerHTML = "Temperture: " + temp +" K";
            description.innerHTML = "Description: " + desc.toUpperCase();

 
            if (icon.localeCompare('01d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/clear_sky.png')";
                document.getElementById('image').src = 'icons/01d@2x.png'
            }
            else if (icon.localeCompare('01n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/clear_sky.png')";
                document.getElementById('image').src = 'icons/01n@2x.png'
            }
            else if (icon.localeCompare('02d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/fewer_clouds.jpg')";
                document.getElementById('image').src = 'icons/02d@2x.png'
            }
            else if (icon.localeCompare('02n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/fewer_clouds.jpg')";
                document.getElementById('image').src = 'icons/02n@2x.png'
            }
            else if (icon.localeCompare('03d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/scattered.jpg')";
                document.getElementById('image').src = 'icons/03d@2x.png'
            }
            else if (icon.localeCompare('03n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/scattered.jpg')";
                document.getElementById('image').src = 'icons/03n@2x.png'
            }
            else if (icon.localeCompare('04d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/broken_clouds.jpg')";
                document.getElementById('image').src = 'icons/04d@2x.png'
            }
            else if (icon.localeCompare('04n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/broken_clouds.jpg')";
                document.getElementById('image').src = 'icons/04n@2x.png'
            }
            else if (icon.localeCompare('09d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/shower_rain.jpg')";
                document.getElementById('image').src = 'icons/09d@2x.png'
            }
            else if (icon.localeCompare('09n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/shower_rain.jpg')";
                document.getElementById('image').src = 'icons/09n@2x.png'
            }
            else if (icon.localeCompare('10d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/rain.png')";
                document.getElementById('image').src = 'icons/10d@2x.png'
            }
            else if (icon.localeCompare('10n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/rain.png')";
                document.getElementById('image').src = 'icons/10n@2x.png'
            }
            else if (icon.localeCompare('11d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/thunderstorm.jpg')";
                document.getElementById('image').src = 'icons/11d@2x.png'
            }
            else if (icon.localeCompare('11n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/thunderstorm.jpg')";
                document.getElementById('image').src = 'icons/11n@2x.png'
            }
            else if (icon.localeCompare('13d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/snow.jpg')";
                document.getElementById('image').src = 'icons/13d@2x.png'
            }
            else if (icon.localeCompare('13n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/snow.jpg')";
                document.getElementById('image').src = 'icons/13n@2x.png'
            }
            else if (icon.localeCompare('50d') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/mist.jpg')";
                document.getElementById('image').src = 'icons/50d@2x.png'
            }
            else if (icon.localeCompare('50n') == 0) {
                document.body.style.backgroundImage = "url('backgrounds/mist.jpg')";
                document.getElementById('image').src = 'icons/50n@2x.png'
            }

            document.getElementById('namevalue').style.visibility="visible";
            document.getElementById('namevalue').style.animation="left 2s ease-in";

            document.getElementById('temterature').style.visibility="visible";
            document.getElementById('temterature').style.animation="right 2s ease-in";

            document.getElementById('description').style.visibility="visible";
            document.getElementById('description').style.animation="left 2s ease-in";

            document.getElementById('image').style.visibility="visible";
            document.getElementById('image').style.animation="right 2s ease-in";
        })

        .catch(err => alert("wrong city name!"))
})



