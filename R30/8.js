// 8. რიცხვის გამყოფები

let x = 10;


let y = 0;
for (let index = 1; index <= x; index++) {

    if (x % index == 0) {
        y += index;
        console.log(index);

    }
}

console.log( `რიცხვის ყველა გამყოფის ჯამია: ${y}`);