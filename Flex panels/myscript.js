const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatch(word) {
  return cities.filter(place => place.city === word)
}
console.log(findMatch('New York'))
// console.log(cities)

const people = [
  { name: 'Wes', year: 1988},
  { name: 'Kait', year: 1986},
  { name: 'Irv', year: 1970},
  { name: 'Lux', year: 2015}
];

const comments = [
  { text: 'Love this!', id: 523423},
  { text: 'Super good!', id: 523423},
  { text: 'You are the best!', id: 2039842},
  { text: 'Ramen is my fav food ever!', id: 123523},
  { text: 'Nice nice nice!', id: 542328},
];

// .SOME (at least 1 thing matches)
const adult = people.some(function(person){
  const currentYear = new Date().getFullYear();
  if(currentYear - person.year >= 19) {
    return true;
  }
})

const isAduult = people.some(person => new Date().getFullYear() - person.year >= 19)
//.EVERY (every item matches the criteria)
const adults = people.every(person => new Date().getFullYear() - person.year >= 19)

//.FIND (first item which matches)

const matchId = comments.find(comment => comment.id === 123523)

// .FINDINDEX 

const id = comments.findIndex(comment => comment.id === 123523)

//. SPLICE (deletes item + next items -> depends on the number)
comments.splice(id,1)
console.log({isAduult})
console.log({adults})
console.log({matchId})
console.log({id})
console.log(comments)

function removeSmallest(numbers) {
  const nums = [...numbers];
  let min = nums[0];

  nums.forEach((num) => {
      if(num < min){
        min = num;
      }
    });
  const id = nums.findIndex(num => num === min);
  nums.splice(id, 1);
  return nums;
}

function isIsogram(str){
  let letters = [];
  for(let i=0; i< str.length; i++){
    if(letters.includes(str[i])){
      letters.push(str[i]);
    }
  }
  return letters.length === str.length;
}

function stray(numbers) {

  numbers.sort((a,b) => a > b ? 1 : -1);

  if(numbers[0] === numbers[1]){
    return numbers[numbers.length -1];
  } else {
    return numbers[0];
  }
}