
const word2 = document.getElementById("word");
const button2 = document.getElementById("button");
const results2 = document.getElementById("results");
const triggers = document.getElementById('triggers');



button2.addEventListener("click", getTriggers);

function getTriggers(){
  triggers.innerHTML = "";

  let trimmed = word2.value.trim();
  let input = trimmed.replace(/[\s]+/, "-");

  fetch(`http://localhost:3000/api/words/${input}/triggers`)
    .then(res => res.json())
    .then (data => {
      createTriggerBox(data)
    })
    .catch(err => console.log(err))
}

function createTriggerBox(data){
  let box = document.createElement('div')
  box.classList.add('similar-words')
  let content = document.createElement('h2')
  let wordBox = document.createElement('div')
  content.innerHTML = `Did you mean?`

  let similarWords = []

  for(let i=0;i<data.length;i++){
    similarWords.push(data[i].word)
  }
  console.log(similarWords)

  for (let word of similarWords){
    wordBox.innerHTML += `<span class="similar" id="newSubmit"> ${word} </span>`
  }

  box.appendChild(content)
  triggers.appendChild(box)
  box.appendChild(wordBox)

}