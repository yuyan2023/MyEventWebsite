const baseUrl = 'https://api.open-meteo.com/v1/forecast';

const queryParams = {
    latitude:-27.493462,
    longitude:153.000531,
    current_weather: true,
};
const queryString = new URLSearchParams(queryParams).toString();
const urlWithParams = baseUrl+"?"+queryString

const requestOptions = {
    method: 'GET',
    redirect:'follow'
};
fetch(urlWithParams, requestOptions)
.then(response => response.json())
.then(data => {
    const weather = data.current_weather;
    console.log("Current temperature:"+weather.temperature+"C");
    const temperature_element = document.getElementById('current_temperature');
    const windspeed_element = document.getElementById('current_windspeed');
    temperature_element.innerText = weather.temperature +"C";
    windspeed_element.innerText = weather.windspeed + "kph";


})
.catch(error => console.log('error', error));

const subscribeForm = document.getElementById('subscribe-form');

const handleInputChange = () => {
    let firstName = document.getElementById('firstName');
    let suburb = document.getElementById('suburb');
    let email = document.getElementById('email');
    let button = document.getElementById('Subscribe-submit-button');

    console.log(email)

    if (firstName.value && suburb.value && email.value && email.validity.valid) {
        console.log("bian lv")
        button.classList.add('enabled');
        button.disabled = false;
    } else {
        button.classList.remove('enabled');
        button.disabled = true;
    }
};
const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let suburb = document.getElementById('suburb').value;
    let email = document.getElementById('email').value;

    let responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'dwdwdqdqdqwdq';

    let payload = {
        subscriber_name: firstName,
        subscriber_suburb: suburb,
        subscriber_email: email
    };

    const url = 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/api/';
    const method = 'POST';
    const headers = {
        'Content-Type': 'application/json',
    };




fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(payload)
})
.then((response) => response.text())
.then((data) => {
    if (data === 'added') {
        responseMessage.textContent = 'Subscription successful. Thank you for subscribing!';
    }  else if (data ==='exists') {
        responseMessage.textContent = 'This email address has already been used to subscribe.';
    }  else if (data ==='error'){
        responseMessage.textContent = 'An error occured with the api. please try again later.';
    }
})
.catch((error) => {
    console.error('Error:', error);
    responseMessage.textContent = 'An unexpected error occurred. Please try again later.';
});

};
subscribeForm.addEventListener('input', handleInputChange);
subscribeForm.addEventListener('submit', handleSubmit);