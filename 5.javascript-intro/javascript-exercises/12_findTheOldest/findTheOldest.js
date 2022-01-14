const findTheOldest = function(people) {
    const curYear = (new Date()).getFullYear();
    for (p of people) {
        if (!("yearOfDeath" in p)) {
            p.yearOfDeath = curYear;
        }
    }
    return people.reduce((oldest, p) => {
        if (p.yearOfDeath - p.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) return p;
        else return oldest;
    }, {yearOfBirth: curYear+1, yearOfDeath: curYear+1,})
};

// Do not edit below this line
module.exports = findTheOldest;
