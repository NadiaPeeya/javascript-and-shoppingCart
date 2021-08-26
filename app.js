function updateProductNumber(isIncreasing, product, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;//update er karone value set korte hobe

    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(productInput.value);
    return phoneNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    //update on the html
    const totalAmount = document.getElementById('sub-total');
    totalAmount.innerText = subTotal;//ekta way

    document.getElementById('tax-amount').innerText = tax;// another way
    // document.getElementById('total-price').innerText = totalPrice;
    const total = document.getElementById('total-price');//ekta way
    total.innerText = totalPrice;
}


//updating phoneNumber
// function updatePhoneNumber(isAdd) {
//     const phoneInput = document.getElementById('phone-number');
//     const phoneNumber = phoneInput.value;
//     if (isAdd) {
//         phoneInput.value = parseInt(phoneNumber) + 1;
//     }
//     else if (phoneNumber > 0) {
//         phoneInput.value = parseInt(phoneNumber) - 1;
//     }

//     const phoneTotal = document.getElementById('phone-total');
//     phoneTotal.innerText = phoneInput.value * 1219;
// }

//handling case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber(true, 'case', 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber(false, 'case', 59);
});

//phone's increase decrease events
document.getElementById('phone-minus').addEventListener('click', function () {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = phoneInput.value;
    // const phoneDecrease = parseInt(phoneNumber) - 1;
    updateProductNumber(false, 'phone', 1219);

});
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber(true, 'phone', 1219);
});

