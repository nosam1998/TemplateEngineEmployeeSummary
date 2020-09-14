// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


function Intern(name, role, email, id, school) {
    Employee.call(this, name, role, email, id);

    this.school = school;
}

Manager.prototype.getSchool = function () {
    return this.school;
}

module.exports = Intern;