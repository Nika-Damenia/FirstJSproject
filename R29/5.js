// 5. პოლიტკორექტული მისალმება-დამშვიდობების მექანიზმი

let userLoggedIn = false;
let userFirstName  = "ნიკა";

let userIsFemale = true;


if (userLoggedIn) {
    if (userIsFemale) {
        console.log(`სალამი ქალბატონო ${userFirstName}`);
    } else {
        console.log(`სალამი ბატონო ${userFirstName}`);
    }
} else {
    if (userIsFemale) {
        console.log(`დროებით ქალბატონო ${userFirstName}`);
    } else {
        console.log(`დროებით ბატონო ${userFirstName}`);
    }
}