var products = [] //make array to store products
function addProduct(name, price, imageUrl){// make function to create a product
    products.push({
        name: name,
        price: price,
        imageUrl: imageUrl
    })
    displayProducts()
}