var button = document.getElementById('button')
var input = document.getElementById('input')
var temp=document.getElementById('ctemp')
var wind=document.getElementById('wind')
var img=document.getElementById('top-img')
var city=document.getElementById('city-name')
var w=document.getElementById('weather-card')
var min=document.getElementById('min-temp')
var max=document.getElementById('max-temp')
var des=document.getElementById('des')
var gust=document.getElementById('gust')
var feels=document.getElementById('feels')
var units=document.getElementById('units')
var tempUnit
var WindUnit

w.style.display="none"
button.addEventListener('click',function(){
    if(units.value =='metric'){
        tempUnit=" °C"
        windUnit=" m/s"
      
        
     
    }
    else{
        tempUnit=" °F"
        windUnit=" MPH"
      
    }
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' +input.value +'&units='+units.value+'&appid=2eef00cbf2cfa4f414271b1ff220beac')
    .then(response =>  response.json())
    .then(data => {
    temp.textContent=data['main']['temp'] +tempUnit
    min.textContent=data['main']['temp_min'] + tempUnit
    max.textContent=data['main']['temp_max'] + tempUnit
    feels.textContent="feels Like "+data['main']['feels_like'] + tempUnit
    wind.textContent="Wind Speed " + data['wind']['speed']+ windUnit
    gust.textContent="Wind Gust " + data['wind']['gust'] + windUnit
    des.textContent=data['weather'][0]['description']
    img.src="http://openweathermap.org/img/wn/" + data['weather'][0]['icon'] +"@2x.png"
    city.textContent=data['name']+" , "+data['sys']['country']
    w.style.display="grid"
}
)

.catch(err =>alert("Sorry did not find city"))

}

)



