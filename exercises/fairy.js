class Fairy {
  constructor(name, dust = 10) {
    this.name = name;
    this.dust = dust
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10
  }

  makeDresses(dresses) {
    dresses.forEach(dress => this.clothes['dresses'].push(dress));
  }

  provoke(){
    this.disposition = 'Vengeful'
  }

  replaceInfant(qualities){
    if (this.disposition == 'Vengeful' && this.humanWards.length < 2){
      this.humanWards.push(qualities)
      qualities['disposition'] = 'Malicious'
      return qualities
    }
    this.humanWards.push(qualities)
    qualities['disposition'] = 'Malicious'
    this.disposition = 'Good natured'
    return qualities
  }
}

module.exports = Fairy;
