console.log("Ok");
var x = 0;
var y = "0";
function sayHellow() {
    return "Hello";
}
;
var Customer = /** @class */ (function () {
    //only a single constructor is allowed in a class
    function Customer(id, name) {
        this.Id = id; //public by default
        this.Name = name; //public by default
    }
    Customer.prototype.Log = function () {
        console.log(this.Id, this.Name);
    };
    return Customer;
}());
var cust = new Customer(1, "Max Tech Train");
cust.Log();
//function j (){
//	let y = 0;  //Let - makes variable only accessible inside the function
//}
var custList = [
    new Customer(2, "P&G"),
    new Customer(3, "GE"),
    new Customer(4, "Great American"),
    new Customer(5, "TQL")
];
for (var _i = 0, custList_1 = custList; _i < custList_1.length; _i++) {
    var cust_1 = custList_1[_i];
    cust_1.Log();
}
var Students = /** @class */ (function () {
    function Students(name, color, number) {
        this.Name = name;
        this.Color = color;
        this.Number = number;
    }
    Students.prototype.Debug = function () {
        console.log(this.Name, this.Color, this.Number);
    };
    return Students;
}());
var student = new Students("Sue Ann", "Green", 7);
student.Debug();
var studentList = [
    new Students("Greg", "Black", 4),
    new Students("Eric B", "Blue", 11),
    new Students("Bob", "Black", 13),
    new Students("Eric S", "Green", 13)
];
for (var _a = 0, studentList_1 = studentList; _a < studentList_1.length; _a++) {
    var student_1 = studentList_1[_a];
    student_1.Debug();
}
