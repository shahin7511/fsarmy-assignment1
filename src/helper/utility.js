const randomNumberInRange = (min, max) => {
    return parseInt(Math.random() * (max - min) + parseInt(min))
}


const generateRandomPerson = (properties) => {

    const firstnames = require("../../data/randomPerson/firstnames.json");
    const lastnames = require("../../data/randomPerson/lastnames.json");
    const addresses = require("../../data/randomPerson/addresses.json");

    const firstname = firstnames[randomNumberInRange(0, firstnames.length)];
    const lastname = lastnames[randomNumberInRange(0, lastnames.length)];
    const email = `${firstname}_${lastname}@example.com`.toLowerCase();

    const personTempalte = {
        "firstname": firstname,
        "lastname": lastname,
        "address": addresses[randomNumberInRange(0, addresses.length)],
        "email": email,
        "age": randomNumberInRange(18, 78),
        "avatar": `https://i.pravatar.cc/150?u=${email}`
    }

    const person = {};
    properties.forEach(prop => {
        person[prop] = personTempalte[prop] ?? null
    });

    return person;
}

const generateStringDetails  = (str) => {
    return  {
        'letters' : str.match(new RegExp(/[a-z]/gi)).length,
        'numbers' : str.match(new RegExp(/[0-9]/g)).length,
        'symbols' : str.match(new RegExp(/\W/g)).length
    };
}


module.exports.randomNumberInRange = randomNumberInRange;
module.exports.generateRandomPerson = generateRandomPerson;
module.exports.generateStringDetails = generateStringDetails;