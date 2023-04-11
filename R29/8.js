// 8. როგორ სწავლობს ჩემი ბიჭი?


let gigosTestResults = [50, 60, 70, 80, 100]; 

if ((gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) > 10) {
    console.log("კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ");
} else if (0 < (gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) && (gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) < 10) {
    console.log("რავიცი, ნიჭიერია მარა ზარმაცი");
} else if ((gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) <= 0) {
    console.log("უხ გიგო გიგოოო");
}