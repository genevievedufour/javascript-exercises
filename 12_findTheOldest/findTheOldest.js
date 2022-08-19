const findTheOldest = function(people) {
    let oldest = people[0];

    for(let i = 0; i < people.length; i++){
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let personAge = getAge( people[i].yearOfBirth, people[i].yearOfDeath);

        if(oldestAge < personAge){
            oldest = people[i];
        }
    }

    return oldest;
};

function getAge(yearOfBirth, yearOfDeath){
    if(!yearOfDeath)
        yearOfDeath = new Date().getFullYear();

    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
