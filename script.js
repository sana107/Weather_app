let form = document.querySelector("form");
let input = document.querySelector("input");
let card = document.querySelector("#weatherCard");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let h5 = document.querySelector("h5");
let p = document.querySelector("p");
let nav = document.querySelector("nav");
let weather = document.querySelector("#nameof");
let search = document.querySelector("#search_box");
let check = document.querySelector("#check");
const toggleStatus = document.getElementById('toggleStatus');
const toggleButton = document.getElementById('toggleButton');


function toggleSwitch() {
  
  
  // Toggle button's active state
  toggleButton.classList.toggle('active');
  
  // Update text based on the state
  if (toggleButton.classList.contains('active')) {
    toggleStatus.innerText = "On";
    nav.style.backgroundColor = "#0dcaf0"; 
    search.style.backgroundColor="white";
     check.style.color = "black";
    
  } else {
    toggleStatus.innerText = "Off";
    nav.style.backgroundColor = "#333333"; 
    weather.style.color = "white";
    search.style.backgroundColor="black";
    check.style.color = "white";
    
  }
}



const fetchweather= async (e)=>{
    e.preventDefault();
    try {
        const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=7de955f4653d427080e121952242507&q=${input.value}&aqi=yes`

        );
        const data = await response.json();
        card.className = "card p-4  shadow";
        h4.innerText = data.current.temp_c+"°C";
        h1.innerText = data.location.name;
        h3.innerText = data.location.region;
        h5.innerText = data.location.country;
        p.innerText = data.location.localtime;
        
      } catch (error) {
        window.alert("Invaild City Name");
        card.className = "d-none";
      }
    form.reset();
};

form.addEventListener('submit', fetchweather);