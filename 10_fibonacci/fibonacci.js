const fibonacci = function(number) {
    if(number < 0){
        return "OOPS";
    }

    if(number === 0){
    return 0;
    }

    let fibArray = [];

    for(let i = 0; i <= number; i++){
        if(i == 0){
            fibArray[i] = 1;
        }
        else if(i == 1){
            fibArray[i] = 1;
        }
        else{
            fibArray[i] = fibArray[i-1] + fibArray[i-2];
        }
    }

    return fibArray[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
