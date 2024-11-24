const productsDiv = document.getElementById('products');

// Function to fetch and display products
function fetchProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Function to display products using a standard for loop
function displayProducts(products) {
    // Clear existing content
    productsDiv.innerHTML = '';

    // Iterate over the products array
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.textContent = product.name;
        productsDiv.appendChild(productDiv);
    }
}

// Fetch products when the page loads
fetchProducts();
