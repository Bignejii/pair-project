var products = []// make array to store all products
function addProduct(name,price,imageUrl) { //function to add a product to the products array
    products.push({ //add the product to the products array
        name: name,//string
        price: Number(price), //number
        imageUrl: imageUrl //string
    })
    displayProducts() // call the array after adding the new product to the products array
}
function displayProducts(){
    var $productList=('#product-container') // select list product 
    $productList.empty() //  delete product cards 
    for(var i = 0;i<products.length;i++){//loop
        var product=products[i]
        var productCardHTML=//mkae product card in the html
            '<div class="product-card">'+
                '<img src="'+product.imageUrl+'" alt="'+product.name+'">'+
                '<h3>'+product.name+'</h3>'+
                '<p>Price: $'+product.price+'</p>'+
            '</div>'
        $productList.append(productCardHTML)//add the product card to product list
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
    $('#product-name').val('') // delete name 
    $('#product-price').val('') // delete price 
    $('#product-image').val('') // delete image url
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
    window.location.href='./PAGES/aboutUS.html'
})