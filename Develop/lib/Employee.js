// TODO: Write code to define and export the Employee class

// Name, Role, Email, and ID are all pieces of the Employee Class

function Employee(name, role, email, id) {
    this.name = name;
    this.role = role;
    this.email = email;
    this.id = id;
}

Employee.prototype.getName = function () {
    return this.name;
}

Employee.prototype.getRole = function () {
    return this.role;
}

Employee.prototype.getEmail = function () {
    return this.email;
}

Employee.prototype.getId = function () {
    return this.id;
}

module.exports = Employee;