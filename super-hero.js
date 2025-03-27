class superHero{
    constructor(name){
        this.name = name;
     
    }
   setName(name) {
         this.name = name;
   }
   getName() {
         return this.name;
   }
}
module.exports = superHero // this is a singleton object
// module.exports = superHero // this is a class object