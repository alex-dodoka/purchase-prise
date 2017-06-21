const discount1 = 10,
    discount2 = 50,
    firstCheckSum = 100,
    secondCheckSum = 350;


function getDiscount() {
    let firstPrice = parseInt($('#first-product').val()),
        secondPrice = parseInt($('#second-product').val()),
        thirdPrice = parseInt($('#third-product').val()),
        fourthPice = parseInt($('#fourth-product').val()),
        totalPrice = getSum(firstPrice, secondPrice, thirdPrice, fourthPice);

    if (totalPrice > firstCheckSum) {
        printSum(getPercentages(totalPrice, discount1));
    } else if (totalPrice > secondCheckSum) {
        printSum(getPercentages(totalPrice, discount2));
    } else {
        printSum(totalPrice);
    }
}


function getPercentages(sum, discount) {
    return sum - ((sum / 100) * discount);
}

function getSum(first, second, third, fourth) {
    return first + second + third + fourth;
}

function printSum(sum) {
    $('#space-for-price').html(sum)
}

