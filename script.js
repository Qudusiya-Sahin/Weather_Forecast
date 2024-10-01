console.log("Hello jee.......");

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}  °C`;

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    try{
    //let latitude = 15.333;
    // let longitude = 74.0833;
    let city = "Goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    console.log("Weather data:-> " , data);
    renderWeatherInfo(data);
    }

    catch(err){
        //handle the error
    }
}

async function getCustomWeatherDetails(){
    try {
        let latitude = 8.6543;
        let longitude = 6.6564;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data = await result.json();
    
        console.log(data);
    }
    catch(err){
        console.log("Error Found" + data);
    }
   
}

function switchTab(clickedTab) {
    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            // getFromSessionStorage();
        }
        console.log("Current Tab", currentTab);
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No GeoLocation Supported");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}

   
