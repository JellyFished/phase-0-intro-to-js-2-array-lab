// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


//destructivelyAppendCat(Ralph);

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
    console.log(cats);
    return destructivelyAppendCat;
   
}

//arr.push("Ralph");
//console.log(cats);

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
    return destructivelyPrependCat;
}

//arr.unshift("Bob");
//console.log(cats);

function destructivelyRemoveLastCat() {
    cats.splice(2, 1);
    return destructivelyRemoveLastCat;
}

//arr.splice(4, 1);
//console.log(cats);

function destructivelyRemoveFirstCat() {
    cats.splice(0, 1);
    return destructivelyRemoveFirstCat;
}

//arr.splice(0, 1);
//console.log(cats);

function appendCat(catName) {
    let newCats = cats.slice();
    newCats.push(catName);
    return newCats;
}
//var newCats = cats.slice();

//arr.push("Broom");
//console.log(newCats);

//PrependCat("Arnold")
function prependCat(catName) {
    let newCats = cats.slice();
    newCats.unshift(catName);
    return newCats;
}
  
//arr.unshift("Arnold").reverse;
//console.log(newCats);

//removeLastCat("Garfield")

function removeLastCat() {
    let newCats = cats.slice();
    newCats.splice(2, 1);
    return newCats;
}
//arr.splice(2, 1);
//console.log(newCats);

//removeFirstCat("Milo")

function removeFirstCat() {
    let newCats = cats.slice();
    newCats.splice(0, 1);
    return newCats;
}
//arr.splice(0, 1);
//console.log(newCats);