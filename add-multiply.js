function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const firstTotal = add(28, 35);
console.log(firstTotal);

// multiply
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const secondTotal = multiply(28, 35);
console.log(secondTotal);


// add and multiplication to calculate wood requirements

/* 
chairWood = 3cft/chair;
tableWood = 10cft/table;
bedWood = 50cft/bed;
*/


function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    console.log(chairWoodQuantity);

    const tableWoodQuantity = tableQuantity * perTableWood;
    console.log(tableWoodQuantity);

    const bedWoodQuantity = bedQuantity * perBedWood;
    console.log(bedWoodQuantity);

    // total wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(5, 3, 2);
console.log(firstOption);