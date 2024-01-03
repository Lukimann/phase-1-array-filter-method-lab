let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, name) {
    let sameDriver = drivers.filter((findHere) => {
        return findHere.toLowerCase() === name.toLowerCase()
    })
    return sameDriver
}