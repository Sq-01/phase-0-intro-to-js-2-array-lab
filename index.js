// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

//Append a cat to the end of the cats array (destructively)
function destructivelyAppendCat(catName) {
  cats.push(catName);
}

//Prepend a cat to the beginning of the cats array (destructively)
function destructivelyPrependCat(catName) {
  cats.unshift(catName);
}

//Remove the last cat from the cats array (destructively)
function destructivelyRemoveLastCat() {
  cats.pop();
}

//Remove the first cat from the cats array (destructively)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

//Append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(catName) {
  return [...cats, catName];
}

//Prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(catName) {
  return [catName, ...cats];
}

//Remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

//Remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}




