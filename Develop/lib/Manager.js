// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");


function Manager(name, role, email, id, officeNumber) {
    Employee.call(this, name, role, email, id);

    this.office = officeNumber;
}

Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
}

module.exports = Manager;