class person {
    constructor(id , name , sex) {
        this.id =id
        this.name = name
        this.sex =sex
    }
    getId (){return this.id}
    getName(){return this.name}
    getSex(){return this.sex}
    getAll(){return "id = " + this.id + " name = " + this.name + " sex = " + this.sex}
    getUnuix(){
        if (this.id % 2==0) {
            return this.id
            
        }else{
            return null
        }
    }
}
let boss = new person(73, "boss", "men");
let bossza = new person(104, "oat", "man");
let boss007 = new person(100, "chipM", "girl");

console.log(boss.getAll());      // id = 73 name = boss sex = men
console.log(bossza.getAll());    // id = 104 name = oat sex = man
console.log(boss007.getAll());   // id = 100 name = chipM sex = girl

console.log(boss.getUnuix());    // undefined (เพราะ 73 ไม่ใช่เลขคู่)
console.log(bossza.getUnuix());  // 104
console.log(boss007.getUnuix()); // 100


// function findNumber(ls){
// return ls.map(number => number * 2).filter({
//     f
// })
// }
// let listNumber = [1,2,3,4,5]

// console.log(findNumber(listNumber));
