let adminSale = 25;
let frequentClientSale = 10;
let studentSale = 15;

let userBalance = 200;
let cartTotal = 215;

let userIsAdmin = true;
let userIsFrequentClient = false; 
let userIsStudent = false;


if (userIsAdmin) {
    if (userBalance >= cartTotal - adminSale) {
        console.log("გადახდა წარმატებით შესრულდა");
    }
   else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    } 

} else if (userIsFrequentClient) {
    if (userBalance >= cartTotal - frequentClientSale) {
        console.log("გადახდა წარმატებით შესრულდა");
    }
    else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else if (userIsStudent) {
    if (userBalance >= cartTotal - studentSale) {
        console.log("გადახდა წარმატებით შესრულდა");
    }
    else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
} else {
    if (userBalance >= cartTotal) {
        console.log("გადახდა წარმატებით შესრულდა");
    }
    else {
        console.log("თქვენ არ გაქვთ საკმარისი თანხა");
    }
}
