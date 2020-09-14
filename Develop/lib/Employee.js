// TODO: Write code to define and export the Employee class

// Name, Role, Email, and ID are all pieces of the Employee Class

function Employee(name, role, email, id) {
    this.name = name;
    this.role = role;
    this.email = email;
    this.id = id;
}

Manager.prototype.getName = function () {
    return this.name;
}

Manager.prototype.getRole = function () {
    return this.role;
}

Manager.prototype.getEmail = function () {
    return this.email;
}

Manager.prototype.getId = function () {
    return this.id;
}

module.exports = Employee;