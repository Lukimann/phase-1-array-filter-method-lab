//let drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, name) {
  let sameDriver = drivers.filter((findHere) => {
    return findHere.toLowerCase() === name.toLowerCase();
  });
  return sameDriver;
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(drivers, name) {
  let newDriver = drivers.filter((sameDriver) => {
    return sameDriver.name === "Bobby";
  });
  return newDriver;
}
