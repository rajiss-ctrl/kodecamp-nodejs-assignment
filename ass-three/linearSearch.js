function linearSearch(arr,searchStr){
    const cleanWord = searchStr.toLowerCase()
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === cleanWord){
            return "Yes, the string exist in the array"
        }
    }
    return "No, the string does not exist in the array"
}

const arr =["apple", "banana" , "chery"]
// const searchStr = "banana"
const searchStr = "Banana"

const result = linearSearch(arr,searchStr)
console.log(result)