// 2. ონლაინ მაღაზია

let userBalance = 38;

let cartTotal = 100;

let x = cartTotal - userBalance;

if (userBalance >= cartTotal) {
    console.log("გადახტა წარმატებით შესრულდა.");
} else {
    console.log(`თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ ${x} ლარი ოპერაციის დასასრულებლად`);
}

