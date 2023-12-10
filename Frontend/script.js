function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Assuming you have a login API endpoint
    fetch('http://localhost:8000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the login response
        console.log(data);
        // Redirect or perform other actions based on the response
    })
    .catch(error => console.error('Error:', error));
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // Assuming you have a registration API endpoint
    fetch('http://localhost:8000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the registration response
        console.log(data);
        // Redirect or perform other actions based on the response
    })
    .catch(error => console.error('Error:', error));
}
