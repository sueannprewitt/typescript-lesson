console.log("Ok");

var x: any = 0;
var y: any = "0";

function sayHellow():string {
	return "Hello";
};
class Customer {
	Id: number;
	Name: string;

	Log(): void {
		console.log(this.Id, this.Name);
	}
//only a single constructor is allowed in a class
constructor(id: number, name: string) {
	this.Id = id;  //public by default
	this.Name = name;  //public by default
}

}

let cust:Customer = new Customer(1, "Max Tech Train");
cust.Log();

//function j (){
//	let y = 0;  //Let - makes variable only accessible inside the function
//}

let custList = [
new Customer (2, "P&G"),
new Customer (3, "GE"),
new Customer (4, "Great American"),
new Customer (5, "TQL")
]

for(let cust of custList) {
	cust.Log();
}



class Students {
	Name: string;
	Color: string;
	Number: number;

	Debug(): void {
		console.log(this.Name, this.Color, this.Number);
	}
constructor (name: string, color: string, number: number){
	this.Name = name;
	this.Color = color;
	this.Number = number;
}
}
let student:Students = new Students("Sue Ann", "Green", 7);
student.Debug();

let studentList = [
new Students ("Greg", "Black", 4),
new Students ("Eric B", "Blue", 11),
new Students ("Bob", "Black", 13),
new Students("Eric S", "Green", 13)
]
for(let student of studentList){
	student.Debug();
}
