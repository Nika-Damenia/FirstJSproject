//  9. Hotel booking

let availableRooms = 8;
let roomPrice = 850; 

let discount = 20;

let userBalance = 15000;

let userHasDiscount = true;

let userRoomCount = 2;

const paymentComplete = (availableRooms > 0 && roomPrice - discount) && (userRoomCount <= availableRooms && userBalance >= roomPrice - (userHasDiscount > 0 && discount));


console.log(paymentComplete);