// 6. ChatGPT-ის ლიმიტომეტრი

let userQuestions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
];

console.log("თქვენ გაქვთ 25 კითხვის დასმის უფლება");
// ეს უნდა თუ არა არვიცი მარა იყოს მაინც⬆️⬆️

if (userQuestions.length == 25) {
    console.log("შემდეგი კითხვის დასმას შეძლებთ 3 საათში");
} else if(userQuestions.length < 25) {
    console.log(("დაგრჩათ კიდევ ") + (25 - userQuestions.length) + (" კითხვა") );
}