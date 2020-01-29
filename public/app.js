const word = document.getElementById("word");
const button = document.getElementById("button");
const results = document.getElementById("results");

button.addEventListener("click", getWord);

function getWord(e) {
  results.innerHTML = "";
  e.preventDefault();

  let trimmed = (word.value).trim();
  let input = trimmed.replace(/[\s]+/, "-")

  fetch(`http://localhost:3000/api/words/${input}`)
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

function addContent(box, data) {
  // Header with the name
  let word = data.word;
  let header = document.createElement("h2");
  header.innerText = word;
  box.appendChild(header);

  //Phonetic as a p-element
  let phonetic = document.createElement("p");
  if(data.phonetic){
    phonetic.innerHTML = `<i>${data.phonetic}</i>`;
  }else {
    phonetic.innerHTML = `<i>I know alot, but I have no idea how to pronounce ${data.word}</i>`
  }
  
  box.appendChild(phonetic);

  //meanings:

  let meaning = data.meaning;

  // Noun?
  if (meaning["noun"]) {
    for (let item of meaning["noun"]) {
      let noun = document.createElement("div");
      noun.innerHTML = "<b>Noun: </b>";

      if (item["definition"]) {
        let definition = document.createElement("div");
        definition.classList.add('secondary-content')
        definition.innerHTML = "Definition: " + item["definition"];
        noun.appendChild(definition);
      }

      if (item["example"]) {
        let example = document.createElement("div");
        example.classList.add('secondary-content')
        example.innerHTML = "Example: " + item["example"];
        noun.appendChild(example);
      }

      if (item["synonyms"]) {
        let synonyms = document.createElement("div");
        synonyms.classList.add('secondary-content')
        synonyms.innerHTML = "Synonyms: " + item["synonyms"];
        noun.appendChild(synonyms);
      }
      box.appendChild(noun);
    }
  }
  // Exclamation?
  if (meaning["exclamation"]) {
    for (let item of meaning["exclamation"]) {
      let exclamation = document.createElement("div");
      exclamation.innerHTML = "<b>Exclamation: </b>";

      if (item["definition"]) {
        let definition = document.createElement("div");
        definition.classList.add('secondary-content')
        definition.innerHTML = "Definition: " + item["definition"];
        exclamation.appendChild(definition);
      }

      if (item["example"]) {
        let example = document.createElement("div");
        example.classList.add('secondary-content')
        example.innerHTML = "Example: " + item["example"];
        exclamation.appendChild(example);
      }

      if (item["synonyms"]) {
        let synonyms = document.createElement("div");
        synonyms.classList.add('secondary-content')
        synonyms.innerHTML = "Synonyms: " + item["synonyms"];
        exclamation.appendChild(synonyms);
      }
      box.appendChild(exclamation);
    }
  }
  // Abbreviation?
  if (meaning["abbreviation"]) {
    for (let item of meaning["abbreviation"]) {
      let abbreviation = document.createElement("div");
      abbreviation.innerHTML = "<b>Abbreviation: </b>";

      if (item["definition"]) {
        let definition = document.createElement("div");
        definition.classList.add('secondary-content')
        definition.innerHTML = "Definition: " + item["definition"];
        abbreviation.appendChild(definition);
      }

      if (item["example"]) {
        let example = document.createElement("div");
        example.classList.add('secondary-content')
        example.innerHTML = "Example: " + item["example"];
        abbreviation.appendChild(example);
      }

      if (item["synonyms"]) {
        let synonyms = document.createElement("div");
        synonyms.classList.add('secondary-content')
        synonyms.innerHTML = "Synonyms: " + item["synonyms"];
        abbreviation.appendChild(synonyms);
      }
      box.appendChild(abbreviation);
    }
  }
  //Transitive verb?
  if (meaning["transitive verb"]) {
    for (let item of meaning["transitive verb"]) {
      let transitive = document.createElement("div");
      transitive.innerHTML = "<b>Transitive verb: </b>";

      if (item["definition"]) {
        let definition = document.createElement("div");
        definition.classList.add('secondary-content')
        definition.innerHTML = "Definition: " + item["definition"];
        transitive.appendChild(definition);
      }

      if (item["example"]) {
        let example = document.createElement("div");
        example.classList.add('secondary-content')
        example.innerHTML = "Example: " + item["example"];
        transitive.appendChild(example);
      }

      if (item["synonyms"]) {
        let synonyms = document.createElement("div");
        synonyms.classList.add('secondary-content')
        synonyms.innerHTML = "Synonyms: " + item["synonyms"];
        transitive.appendChild(synonyms);
      }
      box.appendChild(transitive);
    }
  }



  return box;
}
