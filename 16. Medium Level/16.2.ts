function getFrequency1(book: string[], word: string) {
    return book.filter(w => w === word).length
}

let dictionary;
function getDictionary(book: string[]) {
    if (!dictionary) dictionary = book.reduce((acc, word) => (acc[word] = (acc[word] || 0) + 1, acc), {})
    return dictionary
}

function getFrequency2(book: string[], word: string) {
    dictionary = getDictionary(book)
    return dictionary[word]
}

console.log(getFrequency1(['oh', 'my', 'my', 'my'], 'my') === 3)
console.log(getFrequency2(['oh', 'my', 'my', 'my'], 'my') === 3)
