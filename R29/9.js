let gigosTestResults = [50, 60, 70, 80, 40]; 

let x = (gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]);

if (x >= 5) {
    console.log("კარგი შვილი გყავთ ქალბატონო");
} else if (0 < x && x <= 10) {
    console.log("ნიჭიერია მარა ზარმაცი");
} else {
    console.log("აზრზე არაა");
}