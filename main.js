// make array to store all products
var products = []
function addProduct(name,price,imageUrl) { //function to add a product
    products.push({ //add the product the products array
        name: name,
        price: Number(price), 
        imageUrl: imageUrl 
    })
    displayProducts() // Update the product display
}

// display all products
function displayProducts() {
    var $productList = $('#product-container') // select the product container
    $productList.empty() // delete existing product cards
    // loop in products array
    for (var i = 0; i < products.length; i++) {
        var product = products[i] 
        //make product card
        var $productCard = $('<div>').addClass('product-card') // make div with class "product-card"
        var $productImage = $('<img>')
            .attr('src', product.imageUrl)
            .attr('alt', product.name) 
        var $productName = $('<h3>').text(product.name) // product name in h3
        var $productPrice = $('<p>').text('Price: $' + product.price) // Product price in pargraf
        // add elements to the product card as the last childe of the parent
        $productCard.append($productImage, $productName, $productPrice)
        // add the product card to the product container
        $productList.append($productCard)
    }
}
$('#add-product-button').on('click', function () {
    var name = $('#product-name').val() // get the product name
    var price = $('#product-price').val() // get the product price
    var imageUrl = $('#product-image').val() // get the product image URL

    // validate the inputs
    if (!name || !price || !imageUrl) {
        alert('All fields are required!') // alert if any field is empty
        return 
    }
    // add product and update the display
    addProduct(name, price, imageUrl)
    $('#product-name').val('') // clear name 
    $('#product-price').val('') // clear price 
    $('#product-image').val('') // clear image url
})
// search function
$('#search-bar').on('input', function () {
    var searchTerm = $(this).val().toLowerCase() // get the search term in lowercase
    // loop  all product cards
    $('#product-container .product-card').each(function () {
        var productName = $(this).find('h3').text().toLowerCase() // Find and get product name in lowercase

        // show or hide the product card based on the search term
        if (productName.includes(searchTerm)) {
            $(this).show() // show product
        } else {
            $(this).hide() // hide product
        }
    })
})
