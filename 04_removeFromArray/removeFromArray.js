const removeFromArray = function(array, ...toRemove) {

    const args = [...toRemove];

    let indexesToRemove = new Array();

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < args.length; j++)
        {
            if(array[i] == args[j] && typeof(array[i]) == typeof(args[j]))
            {
                indexesToRemove.push(i)
            }
        }
    }

    for(let i = indexesToRemove.length - 1; i >= 0; i--){
        array.splice(indexesToRemove[i], 1);
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
