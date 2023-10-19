function findQuotes(str) {
    const wordsInQuotes = [];
    let insideQuotes = false;
    let currentWord = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log(char)
        if (char === '"') {
            if (insideQuotes) {
                wordsInQuotes.push(currentWord);
                currentWord = '';
            }
            insideQuotes = !insideQuotes;
        } else if (insideQuotes) {
            currentWord += char;
        }
    }

    return wordsInQuotes;
}
console.log(findQuotes('hello "supermen"'))