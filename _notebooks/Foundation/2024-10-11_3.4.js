function countCharacterTypes(inputString) {
    let totalLetters = 0;
    let totalNumbers = 0;
    let totalSpaces = 0;

    for (let char of inputString) {
        if (char.match(/[a-zA-Z]/)) {
            totalLetters++;
        } else if (char.match(/[0-9]/)) {
            totalNumbers++;
        } else if (char === ' ') {
            totalSpaces++;
        }
    }

    console.log(`Total letters: ${totalLetters}`);
    console.log(`Total numbers: ${totalNumbers}`);
    console.log(`Total spaces: ${totalSpaces}`);
}


const userInput = prompt("Hello my name");
countCharacterTypes(userInput);