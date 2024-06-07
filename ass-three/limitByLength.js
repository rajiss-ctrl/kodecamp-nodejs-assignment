function limitByLength(str){
    if(str.length <= 100){
    return str
    }
    else {
    return str.substring(0, 100 ) + "...";
    }
}

const input = limitByLength("With the greatest respect his ward and a conscientious object in our dear land, I have over the years seen the peculiarities and the enormous potentials of our locality. My academic qualification in civil engineering and also a trained professional in Civil Engineering Laboratory department in Kaduna Polytechnic and community-focused individualism have trained and groomed me to be com")
console.log(input)
