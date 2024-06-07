function polindrome(word){
    if(!word){
        return `Empty input is not a Polindrome`
    }
    const cleanWord = word.toUpperCase()
    const revertedChar = cleanWord.split("").reverse().join("")
    // console.log(joinChar) 

    if(cleanWord === revertedChar){
        return `${revertedChar} is a Polindrome`
    } else {
        return `${revertedChar} is not a Polindrome`
    }
}
console.log(polindrome("madam"))
console.log(polindrome("level"))
console.log(polindrome())

