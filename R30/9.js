
let x = 11;

let y = true;
for (let i = 2; i < x; i++) {
    if (x % i == 0) {
        y = false;
    }
}
if(y) {
    console.log(`${x} მარტივი რიცხვია`);
} else {
    console.log(`${x} არაა მარტივი რიცხვი`);
}