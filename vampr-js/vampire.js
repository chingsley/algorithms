class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  // ansel.addOffspring(sarah)
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      count++;
    }

    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let [seniorVp, juniorVp] = [null, null];

    let thisLevel = this.numberOfVampiresFromOriginal;
    let vampireLevel = vampire.numberOfVampiresFromOriginal;
    let diff = 0;

    if (thisLevel < vampireLevel) {
      seniorVp = this;
      juniorVp = vampire;
      diff = vampireLevel - thisLevel;
    } else if (thisLevel > vampireLevel) {
      juniorVp = this;
      seniorVp = vampire;
      diff = thisLevel - vampireLevel;
    } else {
      return this === vampire ? this : this.creator;
      /**
      * the above line can be re-written thus
      should be that vampire if same vampire is used
       if(this === vampire) {
         return this;
       } else {
         should be thier creator if called on 2 different vampires that are on the same level
         return this.creator;
       }
     */
    }

    /**
     * bubble up the younger vampire to the
     * same level as the older one
     */
    while (diff > 0) {
      juniorVp = juniorVp.creator;
      diff--;
    }

    /**
     * then move both up in tandem until
     * they have the same creator.
     * NOTE: If one of them is already the creator
     * after the bubble up, then the while loop won't
     * run and program jumps to the return line
     */
    while (juniorVp !== seniorVp) {
      juniorVp = juniorVp.creator;
      seniorVp = seniorVp.creator;
    }

    // console.log([seniorVp.name, juniorVp.name]);
    // you can return either seniorVp or juniorVp cause at this stage, they're the same
    return seniorVp;
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    for (let child of this.offspring) {
      let vampire = child.vampireWithName(name);
      if (vampire) {
        return vampire;
      }
    }

    return null;

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let count = 0;
    for (let child of this.offspring) {
      count += child.totalDescendents + 1;
    }
    return count;

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let vampires = [];
    if (this.yearConverted > 1980) {
      vampires.push(this);
    }

    for (let child of this.offspring) {
      vampires = vampires.concat(child.allMillennialVampires);
    }

    return vampires;
  }
}

const original = new Vampire('Original', '1990');
const ansel = new Vampire('Ansel', '1991');
const bart = new Vampire('Bart', '1991');
const elgort = new Vampire('Elgort', '1992');
const sarah = new Vampire('Sarah', '1992');
const andrew = new Vampire('Andrew', '1993');

original.addOffspring(ansel);
original.addOffspring(bart);
ansel.addOffspring(sarah);
ansel.addOffspring(elgort);
elgort.addOffspring(andrew);

// console.log(
//   sarah.numberOfVampiresFromOriginal,
//   andrew.numberOfVampiresFromOriginal,
//   andrew.closestCommonAncestor(original)
// );

module.exports = Vampire;

