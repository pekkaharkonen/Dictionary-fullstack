const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.route("/:word").get(async (req, res, next) => {
  let word = req.params.word;
  const response = await fetch(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${word}`)
  const data = await response.json()
  res.send(data)

});

router.route("/:word/triggers").get(async (req, res, next) => {
  let word = req.params.word;

  const response = await fetch(`https://api.datamuse.com/words?sp=${word}`)
  const data = await response.json();
  res.send(data)
})

module.exports = router;
