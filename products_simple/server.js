const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Products data (in-memory)
let products = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" }
];

// Route to get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
