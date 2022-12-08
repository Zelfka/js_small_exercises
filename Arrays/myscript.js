const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
]
const people = ['Beck', 'Glenn', 'Becker', 'Carl', 'Beckett', 'Samuel', 'Berne', 'Eric', 'Berlin', 'Irving', 'Black', 'Elk', 'Blair', 'Robert']

//Filter

const fifteen = inventors.filter(investor => investor.year > 1499 && investor.year < 1600)
console.table(fifteen)

//Map

const names = inventors.map(investor =>`${investor.first} ${investor.last}`)
console.log(names)

//Sort
const sortedByBirth = inventors.sort((a,b) => a.year > b.year ? 1 : -1)
console.table(sortedByBirth)

//Reduce
const totalYears = inventors.reduce((total, inventor) => {return total + inventor.passed - inventor.year}, 0)
console.log(totalYears)

//Sort

const sortedByYears = inventors.sort((a,b) => {
  if(a.passed - a.year > b.passed - b.year) {
    return 1
  } else {
    return -1
  }
})
console.table(sortedByYears)

// Map on wikipedia https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category')
// const links = [...category.querySelectorAll('a')]
// const filtered = links.map(link => link.textContent)
//                       .filter(link => link.includes('de'))
// console.log(filtered)

//Sort alphabetically by last name
let fullNames = [];
for(let i = 0; i< people.length; i=i+2) {
  let fullName = people[i] + ' ' + people[i+1];
  fullNames.push(fullName);
}
const orderedFullNames = fullNames.sort((a,b) => a > b ? 1 : -1);
console.log(orderedFullNames);

//Reduce duplicates

const data =['car', 'truck', 'truck', 'car', 'car', 'truck','car',]
const reduced = data.reduce((obj, vehicle) => {
if(!obj[vehicle]){
  obj[vehicle] = 0;
}
obj[vehicle]++;
return obj;
},{})
console.log(reduced)
