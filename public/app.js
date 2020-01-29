const word = document.getElementById("word");
const button = document.getElementById("button");
const results = document.getElementById("results");

button.addEventListener("click", getWord);

function getWord(e) {

  results.innerHTML = "";
  e.preventDefault();
  fetch(`http://localhost:3000/api/words/${word.value}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      createBox(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function createBox(data) {
  for (let i = 0; i < data.length; i++) {

    //Creating a new box with class "box"
    let newBox = document.createElement("div");
    newBox.classList.add("box");

    let box = addContent(newBox, data[i]);


    // newBox.innerHTML = `<p>${JSON.stringify(data)}</p>`

    results.appendChild(box);
  }
}


function addContent(box, data){
  // Header with the name
  let word = data.word;
  let header = document.createElement('h2')
  header.innerText = word;
  box.appendChild(header)

  //Phonetic as a p-element
  let phonetic = document.createElement('p');
  phonetic.innerText = data.phonetic;
  box.appendChild(phonetic)

  //meanings:

  let meaning = data.meaning;
  console.log(meaning)


  if (meaning["noun"]){
    let noun = document.createElement('div');
    for(let item of meaning["noun"]){
      console.log('Noun: ')
      if(item["definition"]){
        console.log(item["definition"])
      }
      if(item["example"]){
        console.log(item["example"])
      }
    }
  }
  if (meaning["transitive verb"]){
    let text = `Transitive verb:`
    for(let item of meaning["transitive verb"]){
      console.log('Transitive verb: ')
      if(item["definition"]){
        console.log(item["definition"])
      }
      if(item["example"]){
        console.log(item["example"])
      }
    }
  }

  //transitive verbs as a div - word.meaning.transitive verb


  return box;
}


// function getKeyByValue(object, value) { 
//   return Object.keys(object).find(key => object[key] === value)
// }