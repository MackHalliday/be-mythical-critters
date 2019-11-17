class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    this.human ^= true;
    this.wolf ^= true;
    this.hungry ^= true;
  }

  eat(victim) {
    if (this.hungry == false || this.human == true) {
      return `I cannot eat because I am not hungry.`
    }
    else {
      this.hungry = true
      victim.alive = false
      this.change()
      return 'YUM!'
    }
  }
}

module.exports = Werewolf;
