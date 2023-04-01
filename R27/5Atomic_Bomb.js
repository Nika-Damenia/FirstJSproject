//  5. ატომური ბომბი

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true;

const bombWillLaunch = (presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey

console.log(bombWillLaunch);