async function signup(){

    console.log('aqui');
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;


    let response = await fetch('http://localhost:4000/user/signup', {
        method: 'POST',
        headers: {
            "Content-type":"application/json" // permite que nuestro backend reciba el JSON
        },
        body: JSON.stringify({ // enviar los objetos con formato JSON
            correo,
            password,
            name,
            address,
            phone
        })
    });

    let responseJson = await response.json();
    localStorage.setItem('token', responseJson.token)
}


//ahora se hara el login del usuario registrado,
async function login() {
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    let response = await fetch('http://localhost:4000/user/signin', {
        method: 'POST',
        headers: {
            "Content-type":"application/json" // permite que nuestro backend reciba el JSON
        },
        body: JSON.stringify({ // enviar los objetos con formato JSON
            correo,
            password,
        })
    });

    let responseJson = await response.json();
    localStorage.setItem('token', responseJson.token)

    window.location.href = '/';
}

// cerrra sesión
async function logout() {
    localStorage.removeItem('token');

    window.location.href = '/login'
}


async function verifySession() {
    
    let token = localStorage.getItem('token');
    if (!token) {

    window.location.href = '/login';
    }

    document.getElementById('token').innerText = token;

}