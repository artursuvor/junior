// chybí středníky
class Person {
  constructor (jmeno, vek){
    this.jmeno = jmeno
    this.vek = vek
  }
  toString(){
    return `Jmenuji se ${this.jmeno} a je mi ${this.vek} let`
  }
}

// CMS exporty bych už vůbec nepoužíval, je to krapet starší verze a ne zcela kompatibilní s moderním JS
// Použil bych ESM (ES Modules) a import/export
module.exports = Person
