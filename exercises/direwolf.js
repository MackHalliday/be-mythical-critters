class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true
  }

  protect(stark){
    if (this.home === stark.location && this.starksToProtect.length <= 1){
      stark.safe = true;
      this.huntsWhiteWalkers = false;
      this.starksToProtect.push(stark)
    }
  }
  leave(stark){
    this.starksToProtect.splice(stark)
    stark.safe = false
  }
}

module.exports = Direwolf;
