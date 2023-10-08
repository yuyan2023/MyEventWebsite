const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

document.querySelector('.login-link').addEventListener('click', function() {
    loginModal.style.display = 'block';
});

document.querySelector('.register-link').addEventListener('click', function() {
    registerModal.style.display = 'block';
});

document.querySelectorAll('.close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

function submitForm(type) {
    const url = type === 'login' ? 'your-login-endpoint' : 'your-register-endpoint';
    const data = {
        username: document.getElementById(type + 'Username').value,
        password: document.getElementById(type + 'Password').value
    };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the response here
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
