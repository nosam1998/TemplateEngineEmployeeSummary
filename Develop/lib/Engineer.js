// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


function Engineer(name, role, email, id, github) {
    Employee.call(this, name, role, email, id);

    this.github = github;
}

Engineer.prototype.getGithub = function () {
    return this.github;
}

module.exports = Engineer;