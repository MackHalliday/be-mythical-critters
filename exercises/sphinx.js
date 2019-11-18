class Sphinx {
  constructor(riddles) {
    this.name = null
    this.riddles = []
  }

  collectRiddle(riddle){
    if (this.riddles.length < 3){
      this.riddles.push(riddle)
    } else {
      this.riddles.shift()
      this.riddles.push(riddle)
    }
  }

  findMatchingRiddle(answer){
    this.riddles.find(riddle => riddle.answer == answer)
  }

  attemptAnswer(answer){
    var riddle = this.findMatchingRiddle(answer)
    if (riddle){
      this.riddles.splice(riddle, 1)
      return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    else {
      return 'nice try'
    }

  }
}

module.exports = Sphinx;
