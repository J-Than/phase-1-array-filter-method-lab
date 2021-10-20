function findMatching(nameList, matchName){
    return nameList.filter(name => name.toUpperCase() === matchName.toUpperCase());
}

function fuzzyMatch(nameList, firstLetters){
    return nameList.filter(name => name.indexOf(firstLetters) === 0);
}

function matchName(driverArray, matchName){
    return driverArray.filter(obj => obj.name === matchName);
}