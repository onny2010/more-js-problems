const greetings = 'hello! how r you?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        console.log(letter);
        reverse = letter + reverse;
    }
}
const reversed = reverseString(greetings);
console.log(reversed);