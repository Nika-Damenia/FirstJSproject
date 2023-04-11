// 3. გამოცდის ქულა

let maxScore = 80;
let barrier = 15;
let studentScore = 14;

let z = barrier;
let x = studentScore;
let y = maxScore


if (studentScore >= barrier || studentScore == maxScore ) {
    console.log(`გილოცავთ, თქვენ გადალახეთ ${z} ქულიანი ბარიერი ${x}/${y} ქულით`);
} else {
    console.log(`ვწუხვარ, თქვენ ვერ გადალახეთ ${z} ქულიანი ბარიერი ${x}/${y} ქულით`);
}