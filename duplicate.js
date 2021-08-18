const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul,', 'gabul', 'cabul', 'habul', 'abul', 'ebul'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     console.log(element);
    // }

    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);




// numbers
/* const numbers = [15, 55, 67, 45, 22, 22, 15, 66, 33, 66];

function removeDuplicate(numbers) {
    const unique = [];

    for (const element of numbers) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers); */