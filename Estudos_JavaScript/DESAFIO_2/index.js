let productValue = Number(prompt('Enter the product value: '))
console.log(typeof(productValue))

if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'approved'
}

else {
    document.getElementById('result').innerHTML = 'Denied'
}


