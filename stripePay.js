window.onload = function() {

    var stripe = Stripe('pk_test_TBjBFwqX2ACoWVZtu1vOueuO');

    
    let button = document.querySelector('#checkoutButton');
    button.addEventListener('click', function(){
    
    let boxes = document.querySelectorAll('.Check');
        console.log(boxes)

        let items = [];
        let item
        for (let box of boxes){
            console.log(box.checked)
            if (box.checked===true){
               item = {
                   sku: box.dataset.sku, 
                   quantity: 1
                }
                items.push(item)
            }
           
        }
    
        stripe.redirectToCheckout({
            items: items,
            successUrl: 'http://localhost:8000/success.html',
            cancelUrl: 'http://localhost:8000/cancel.html',
        }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.log(result.error.message); 
        });
    })
}