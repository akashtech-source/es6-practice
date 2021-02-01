class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "abcd school"
    }
}
const student1 = new student(12, "shuvo");
const student2 = new student(22, "mahi");
console.log(student1.name, student2.name);