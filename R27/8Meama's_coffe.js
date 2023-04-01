//  8. meama_ს ყავა

let capsuleCount = 50;
let capsulePrice = 1.5;

let userBalance = 1.5;

let creditCardStatus = userBalance >= capsulePrice;

const paymentComplete = capsuleCount >= 1 && creditCardStatus;

console.log(paymentComplete);