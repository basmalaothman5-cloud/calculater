function calculatePrice() {
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var discount = document.getElementById("discount").value;
    var result = document.getElementById("result");
    result.setAttribute("class", "alert theme-danger my-5");

    if (product == "") {
        result.innerHTML = "please select a product";
    } else if (quantity == "") {
        result.innerHTML = "Please Enter quantity";
    } else if (discount == "") {
        result.innerHTML = "Please Enter discount";
    } else if (isNaN(quantity)) {
        result.innerHTML = "Please Enter a vaild quantity";
    } else if (isNaN(discount)) {
        result.innerHTML = "Please Enter a vaild discount";
    } else if (discount < 0 || discount > 100) {
        result.innerHTML = "discount must be between 0 and 100";
    } else {
        var total = product * quantity;
        var discountAmount = (total * discount) / 100;
        var subtotal = total - discountAmount;
        result.setAttribute("class", "alert theme-success my-5");
        result.innerHTML=`subtotal is ${subtotal} and discount Amount is ${discountAmount} and total is ${total}`;
    }
    console.log(`subtotal is ${subtotal}`);


}