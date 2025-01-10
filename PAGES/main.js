var products = []// make array to store all products
function addProduct(name,price,imageUrl) { //function to add a product to the products array
    products.push({ //add the product to the products array
        name: name,//string
        price: Number(price), //number
        imageUrl: imageUrl //string
    })
    displayProducts() // call the array after adding the new product to the products array
}
function displayProducts() {
    var $productList = $('#product-container')
    $productList.empty()

    for (var i = 0; i < products.length; i++) {
        var product = products[i]
        var productCardHTML =
            '<div class="product-card">' +
                '<img src="' + product.imageUrl + '" alt="' + product.name + '">' +
                '<h3>' + product.name + '</h3>' +
                '<p>Price: $' + product.price + '</p>' +
            '</div>';
        $productList.append(productCardHTML)
    }
}
$('#add-product-button').on('click', function () {
    var name = document.getElementById('product-name').value; // get name
    var price = document.getElementById('product-price').value; // get price
    var imageUrl = document.getElementById('product-image').value; // get image url

    if (!name || !price || !imageUrl) { // make sure to put  inputs
        alert('All fields are required!'); // alert if  field is empty
        return;
    }

    addProduct(name, price, imageUrl); // add product and update the display

    // delete  the input
    document.getElementById('product-name').value = ''; // delete name
    document.getElementById('product-price').value = ''; // delete price
    document.getElementById('product-image').value = ''; // delete image url
})
// search function
$('#search-bar').on('input',function(){
    var $searchBar=$('#search-bar')
    var searchTerm=$searchBar.val().toLowerCase()
    var productCards=$('#product-container .product-card')
    for(var i=0;i<productCards.length;i++){//loop
        var card=$(productCards[i])
        var productName = card.children('h3').text().toLowerCase()
        if (productName.includes(searchTerm)) {
            card.show(); // show product
        } else {
            card.hide(); // hide product
        }
    }
});

//linking the about us page with html
$('.about').on('click',function(){
    window.location.href='./aboutUS.html'
})


