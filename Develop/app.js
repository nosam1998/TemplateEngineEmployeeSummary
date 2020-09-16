const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

let team_member_objs = [];

let generic_info = [
    {
        type: "input",
        message: "What is the employees Name?",
        name: "name"
    }, {
        type: "input",
        message: "What is the employees Email?",
        name: "email"
    }, {
        type: "input",
        message: "What is the employees ID?",
        name: "id"
    }
];

const get_role_specific = role => {
    let gi = generic_info;
    if (role === "Manager") {
        gi.push({
            type: "input",
            message: "What is the managers office number?",
            name: "officeNumber"
        });
    } else if (role === "Engineer") {
        gi.push({
            type: "input",
            message: "What is the engineers github?",
            name: "github"
        });
    } else if (role === "Intern") {
        gi.push({
            type: "input",
            message: "What school does the intern go to?",
            name: "school"
        });
    } else {
        render_html();
    }
    console.log(gi);
    return gi;
}

const create_employee_obj = (response, role) => {
    let temp_employee;
    if (role === "Manager") {
        temp_employee = new Manager(response.name, role, response.email, response.id, response.officeNumber);
    } else if (role === "Engineer") {
        temp_employee = new Engineer(response.name, role, response.email, response.id, response.github);
    } else if (role === "Intern") {
        temp_employee = new Intern(response.name, role, response.email, response.id, response.school);
    } else {
        // console.log("Something isn't right?!")
    }
    
    team_member_objs.push(temp_employee);
}

const get_generic_info = role => {
    let generic_info_role_based = get_role_specific(role);
    // console.log(generic_info_role_based);
    inquirer.prompt(generic_info_role_based).then(response => {
        create_employee_obj(response, role);
        
        // console.log(temp_employee);
        // console.log("----------");
        // console.log(team_member_objs);
    })
}

// Might need to be a regular function (NOT an arrow function)
const get_role = () => {
    // Get the information specific to the type/role of the employee
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the employees role?",
            choices: ["Manager", "Engineer", "Intern", "No more employees to add."]
        }
    ]).then(response => {
        console.log(response);
        if (response.role === "No more employees to add.") {
            render_html();
        }
        return response.role;
    })
}

const main_loop = () => {
    let role = get_role();
    get_generic_info(role);
}

const render_html = () => {
    if (team_member_objs.length === 0) {
        console.log("Please add at least one employee before you are done!")
    }
}

main_loop()