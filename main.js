var products = []// make array to store all products
function addProduct(name,price,imageUrl) { //function to add a product to the products array
    products.push({ //add the product to the products array
        name: name,//string
        price: Number(price), //number
        imageUrl: imageUrl //string
    })
    displayProducts() // call the array after adding the new product to the products array
}
function displayProducts() {//display all products
    var $productList = $('#product-container') // select the product list
    $productList.empty() // delete existing product cards
    // loop in products array
    for (var i = 0; i < products.length; i++) {
        var product = products[i] 
        var $productCard = $('<div>').addClass('product-card') // make div with class "product-card"
        var $productImage = $('<img>')
            .attr('src', product.imageUrl)
            .attr('alt', product.name) 
        var $productName = $('<h3>').text(product.name) // product name in h3
        var $productPrice = $('<p>').text('Price: $' + product.price) // Product price in pargraf
        $productCard.append($productImage, $productName, $productPrice)//add elements to the product card as the last childe of the parent
        $productList.append($productCard)//add the product card to the product container
    }
}
$('#add-product-button').on('click', function () {
    var name = $('#product-name').val() // get the product name
    var price = $('#product-price').val() // get the product price
    var imageUrl = $('#product-image').val() // get the product image URL
    if (!name || !price || !imageUrl) {//validate the inputs
        alert('All fields are required!') // alert if any field is empty
        return 
    }
    addProduct(name, price, imageUrl)    // add product and update the display
    $('#product-name').val('') // clear name 
    $('#product-price').val('') // clear price 
    $('#product-image').val('') // clear image url
})
// search function
$('#search-bar').on('input', function () {
    var searchTerm = $(this).val().toLowerCase(); // get the search  in lowercase
    var productCards = $('#product-container .product-card')
    // Use a for loop to iterate over the product cards
    for (var i = 0; i < productCards.length; i++) {//loop  over the product cards
        var card = $(productCards[i])
        var productName = card.children('h3').text().toLowerCase()
        // Show or hide the product card based on the search term
        if (productName.includes(searchTerm)) {//show or hide the product card based on the search
            card.show(); // show product
        } else {
            card.hide(); // hide product
        }
    }
});
//linking the about us page with html
$('.about').on('click',function(){
    window.location.href='./PAGES/aboutUS.html'
})