class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.crankiness = 0;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
  }

  event(sound) {

    if (this.layingDown == true) {
      return 'NO!'
    }
    this.crankiness++

    if (this.crankiness >= 3) {
      this.cranky = true;
      return 'NO!';
    }
    else {
      return sound;
    }
  }

  shoot(){
    return this.event('Twang!!!');
  }

  run() {
    return this.event('Clop clop clop clop!!!');
  }

  sleep() {
    if (this.standing == true){ return 'NO!'}
    this.crankiness = 0
    this.cranky = false
    return 'ZZZZ'
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if (this.standing){
      this.crankiness = 0
      this.cranky ^= true
    }
    else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;
