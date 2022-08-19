const findTheOldest = function(people) {

    return people.reduce(function(oldest, person){
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);

        if(oldestAge < personAge){
            oldest = person;
        }

        return oldest;
    });
};

function getAge(yearOfBirth, yearOfDeath){
    if(!yearOfDeath)
        yearOfDeath = new Date().getFullYear();

    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
