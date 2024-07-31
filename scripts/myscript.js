// Click hamburger menu icon to open sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}


// Click on (x) to close the sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// Click to slide open panel
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "500px";
    } 
  }
}


// Fetch Weather
const apiKey = process.env.WEATHER_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    locationElement.textContent = data.name;
    temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionElement.textContent = data.weather[0].description;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
}


// Get the modal
let modal = document.getElementById('myModal');
  

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = $('.myImg');
let modalImg = $("#img01");
let captionText = document.getElementById("caption");
$('.myImg').click(function(){
  modal.style.display = "block";
  let newSrc = this.src;
  modalImg.attr('src', newSrc);
  captionText.innerHTML = this.alt;
});


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}


//Get the button
let mybutton = document.getElementById("myBtn");


//When user scrolls down 20px from top of the doc, show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


//When user clicks on the button, scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Custom message for invalid phone number
function invalidMessage(textbox) {
  if(textbox.validity.patternMismatch) {
    textbox.setCustomValidity('Please enter a 10-digit phone number');
  } else {
    textbox.setCustomValidity('');
  }
  return true;
}


// Script for calculator
// Function that display value 
function dis(val) { 
  document.getElementById("result").value += val 
} 

function myFunction(event) { 
  if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' 
  || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' 
  || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '-' 
  || event.key == '*' || event.key == '/') 
    document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
  if (event.keyCode === 13) { 
    console.log("Enter"); 
    let x = document.getElementById("result").value 
    console.log(x); 
    solve(); 
  } 
} 

// Function that evaluates the digit and return result 
function solve() { 
  let x = document.getElementById("result").value 
  let y = math.evaluate(x) 
  document.getElementById("result").value = y 
} 

// Function that clear the display 
function clr() { 
  document.getElementById("result").value = "" 
}