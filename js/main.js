//MORNING CHALLENGE:
  //create a Wu-Tang Clan name generator.
  //answers generated based on users name and responses to 5 questions.
  //ES6+, running on a node server
  //must return a first wutang name and last wutang name

//event listener for button
document.getElementById("submit").onclick = userSubmit

//names that will be pulled
let first = ["John","Arch","Ciroc","Java","Turbo","Cookie","Arcane","Kira","Yellow","Raving","Rasta","Mill","Straight"]//put first names here
let last = ["Henny","Script","Motion","Wave","Wacker","Dude","Potato","Maxim","Mixa","Produca","Delight","Rust","Booty"]//put last names in here

//function --users submit their selections
function userSubmit(){
  let firstQ = parseFloat(document.getElementById('firstQues').value)
  let secQ = parseFloat(document.getElementById('secondQues').value)
  let thirdQ = parseFloat(document.getElementById('thirdQues').value)
  let fourthQ = parseFloat(document.getElementById('fourthQues').value)
  let fifthQ = parseFloat(document.getElementById('fifthQues').value)
  let firstLength = document.getElementById('firstname').value.length
  let secondLength = document.getElementById('lastname').value.length
  let questions = firstQ + secQ + thirdQ + fourthQ + fifthQ
  //pull first name from array
  let genFirst = firstLength + questions - 1
  //pull last name from array
  let genLast = secondLength + questions - 1
  //validate that they inserted a name
  if(firstLength == 0 || secondLength == 0){
    alert("Enter your first and last name.")
  }else{
    //validate that their firstname isn't too long for array
    if(genFirst >  first.length - 1){
      genFirst = first.length -1
    }
    //validate that their lastname isn't too long for array
    if(genLast >  last.length - 1){
      genLast = last.length -1
    }
    //puts result in the dom
    document.getElementById("insertFName").innerText = ("Your clan name is: " + first[genFirst] + " " + last[genLast])
    //

    }
}
