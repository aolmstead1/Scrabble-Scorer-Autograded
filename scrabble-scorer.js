   // This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 
   const input = require("readline-sync")

   const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
   }

   function oldScrabbleScorer(word) {
      word = word.toUpperCase()
      let letterPoints = ""
      for (let i = 0; i < word.length; i++) {
   
      for (const pointValue in oldPointStructure) {
   
         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }
   
      }
      }
      return letterPoints
   }

   // your job is to finish writing these functions and variables that we've named //
   // don't change the names or your program won't work as expected. //

   function initialPrompt() {
      console.log("Let's play some scrabble! Enter a word:")
      word = input.question('')
      return word
   }
   function simpleScorer(word){
      word = word.toUpperCase()
      letterPoints = 0
      for (i=0; i < word.length; i++) {
            letterPoints += 1
         }  
      console.log(letterPoints)
      return letterPoints
      }

   function vowelBonusScorer(word){
      word = word.toUpperCase()
      letterPoints = 0
      vowels = ["A", "E", "I", "O", "U"]
      for (i=0; i < word.length; i++) {
   
         if (vowels.includes(word[i])) {
            letterPoints += 3 
         } else {
            letterPoints += 1
         }

      }
      console.log(letterPoints)
      return letterPoints
   }

   function scrabbleScorer(word){
      letterPoints = 0
      word = word.toLowerCase()
      for (let i = 0; i < word.length; i++) {
         const pointValue = newPointStructure[word[i]]
               letterPoints += pointValue
            }
         console.log(letterPoints)
         return letterPoints
   }
      
      
   


   const scoringAlgorithms = [simpleScore = {
      name: "Simple Score",
      description: "Each letter is worth 1 point.",
      scorerFunction: simpleScorer   

   }, 
      vowelBonusScore = {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scorerFunction: vowelBonusScorer

   }, 
      scrabbleScore = {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scorerFunction: scrabbleScorer

   }
   ]

   function scorerPrompt() {
      inputNumber = input.question(`Which scoring algorithm would you like to use?\n\n[0] ${scoringAlgorithms[0].name} - ${scoringAlgorithms[0].description}\n[1] ${scoringAlgorithms[1].name} - ${scoringAlgorithms[1].description}\n[2] ${scoringAlgorithms[2].name} - ${scoringAlgorithms[2].description}\n\nEnter 0, 1, or 2: `)
         if (inputNumber == 2) {
            return scoringAlgorithms[2].scorerFunction(word)
         } else if (inputNumber == 0) {
            return scoringAlgorithms[0].scorerFunction(word)
         } else if (inputNumber == 1) {
            return scoringAlgorithms[1].scorerFunction(word)
         } else {
            console.log("not a number")
   }
}

   function transform(oldPointStructure) {   
         const newPointStructure = {}
            for (const pointValue in oldPointStructure) {
               let letters = oldPointStructure[pointValue]
               for (let i = 0; i < letters.length; i++) {
                  newPointStructure[letters[i].toLowerCase()] = Number(pointValue)
               }
            }
            return newPointStructure
}
         

   let newPointStructure = transform(oldPointStructure)

   function runProgram() {
      initialPrompt()
      scorerPrompt()      
      
      } 
      
      
   

   // Don't write any code below this line //
   // And don't change these or your program will not run as expected //
   module.exports = {
      initialPrompt: initialPrompt,
      transform: transform,
      oldPointStructure: oldPointStructure,
      simpleScorer: simpleScorer,
      vowelBonusScorer: vowelBonusScorer,
      scrabbleScorer: scrabbleScorer,
      scoringAlgorithms: scoringAlgorithms,
      newPointStructure: newPointStructure,
      runProgram: runProgram,
      scorerPrompt: scorerPrompt
   }
