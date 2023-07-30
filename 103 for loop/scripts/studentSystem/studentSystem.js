function register(){
    let computerName =prompt("Computer name:");
    let quantityNumber =Number(prompt("Enter quantity: "));
    let computerPrice =Number(prompt("Enter price: "));
    let computerTax =Number(prompt("Enter tax: "));
    let total =(quantityNumber * computerPrice) + computerTax;

    document.getElementById("computerReceipt").innerHTML+=`<li class="text">${computerName} - Quantity: ${quantityNumber} - Price:  ${computerPrice} - Tax: ${computerTax} = Total: ${total.toFixed(2)} </li>`;

}
