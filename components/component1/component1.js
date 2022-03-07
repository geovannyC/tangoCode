function test(params) {
    return true
}
function codeVerificator(params) {
    //Take all string numbers and get each number in array 
    let newArr = params.split("")
    let sumAll=0;
    let oddNums = 0
    let evenNums = 0
    //Check each number
    newArr.forEach(element => {
        let num = parseInt(element)
        //Get the number position
        let position = newArr.indexOf(element)+1
        // Sum all the numbers: S
        sumAll+=num
        if(position%2===0){
            // Sum all the numbers in an even position: E
            evenNums+=num
        }else{
            // Sum all the numbers in an odd position: O
            oddNums+=num
        }
    });
    // Multipli O x 2 and E x 3 and sum te results
    let result = (oddNums*2)+(evenNums*3)+sumAll
    // Divide by 10
    return result/10
}
function checkDigitVerification(value){
    // Separate the string in letters, code verification and digit verification
    let allCode =value.slice(4,value.length).split("-")
    // Get code Verification
    let codeVr = allCode[0]
    // Get digit Verification
    let validator_digit = allCode[1]
    // Decript the code verification
    const fnCodeVerificator = codeVerificator(codeVr)
    // Response with the requirement
    if(fnCodeVerificator===validator_digit){
        return "OK"
    }else{
        return "NOT VALID"
    }
}
module.exports={
    test,
    codeVerificator,
    checkDigitVerification
}