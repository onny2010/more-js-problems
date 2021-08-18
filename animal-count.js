function animalsCount(miles) {
    const animalsFirst10miles = 5;
    const animalsSecond10miles = 10;
    const animalsRestmiles = 25;
    if (miles <= 10) {
        const totalAnimals = miles * animalsFirst10miles;
        return totalAnimals;
    }
    else if (miles <= 20) {
        const firstDensityAnimals = 10 * animalsFirst10miles;
        const restMiles = miles - 10;
        const secondDensityAnimals = restMiles * animalsSecond10miles;
        const totalAnimals = firstDensityAnimals + secondDensityAnimals;
        return totalAnimals;
    }
    else {
        const firstDensityAnimals = 10 * animalsFirst10miles;
        const secondDensityAnimals = 10 * animalsSecond10miles;
        const restMiles = miles - 20;
        const restDensityAnimals = restMiles * animalsRestmiles;
        const totalAnimals = firstDensityAnimals + secondDensityAnimals + restDensityAnimals;
        return totalAnimals;
    }
}

const animals = animalsCount(8);
console.log(animals);
const animals2 = animalsCount(19);
console.log(animals2);
const animals3 = animalsCount(26);
console.log(animals3);
const animals4 = animalsCount(50);
console.log(animals4);