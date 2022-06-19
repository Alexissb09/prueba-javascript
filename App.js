class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div')
        element.innerHTML = `
            <div class = "card text-center mb-4">
                <div class = "card-body">
                    <strong>Product name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product year</strong>: ${product.year}
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    deleteProduct() {

    }

    showMessage() {

    }
}

// DOM EVENTS

document.getElementById('product-form') // Obtiene el formulario
.addEventListener('submit', function(e) { // Indica que el evento es el Submit 
    const name = (document.getElementById('name')).value; // Obtiene los elementos del formulario
    const price = (document.getElementById('price')).value;
    const year = (document.getElementById('year')).value;

    console.log(name, price, year);

    const product = new Product (name, price, year);

    const ui = new UI();

    ui.addProduct(product);

    e.preventDefault(); // Cancela el refresh
})

