class Human {
  constructor(name, home = 'Swamp') {
    this.name = name;
    this.encounterCounter = 0
    this.knockedOut = false
  }

  noticesOgre(){
    if (this.encounterCounter % 3 == 0 && !this.encounterCounter == 0 ){
      return true
    }
    else {
      return false
    }
  }
}

module.exports = Human;
