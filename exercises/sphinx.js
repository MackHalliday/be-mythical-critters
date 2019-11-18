class Sphinx {
  constructor(riddles) {
    this.name = null
    this.riddles = []
  }

  collectRiddle(riddle){
    if (this.riddles.length < 3){
      this.riddles.push(riddle)
    }
  }
}

module.exports = Sphinx;
