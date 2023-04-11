// 7. ფიტნეს აპლიკაცია

let userWeights = [70, 69, 68, 65];
let goal = 60;

let x = userWeights[userWeights.length - 1] - goal;


if (userWeights[userWeights.length - 1] == goal) {
    console.log("თქვენ მიაღწიეთ თქვენს მიზანს");
} else if (userWeights[userWeights.length - 1] > goal) {
    console.log(`შედეგის მიღწევამდე დაგრჩა ${x} კილო`);
}

