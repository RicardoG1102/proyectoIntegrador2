async function getProducts () {

    let nameProduct = document.getElementById('nameguayo')
    let response = await fetch('http://localhost:4000/product',{
        method: 'GET',
        headers: {
            "Content-type":"application/json"
        },
    });

    let products =  await response.json();
    
    for(let product of products) {
        let nameGuayo = document.createElement('p')

        nameGuayo.value = product.id;
        nameGuayo.innerHTML = product.name;

        nameProduct.appendChild(nameGuayo);
    }
}

document.addEventListener('DOMContentLoaded',getProducts())