const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(name) {
    return drivers.filter(driver => driver === name);
    //driver is a temporary variable that reps each element of the driver.
}
let filterDrivers = findMatching('Bobby');
console.log(filterDrivers);