const inquirer = require('inquirer');
const mysql = require('mysql2');
const { inherits } = require('util');
// const db = require('./db/connection');
require('console.table');
const logo = require('asciiart-logo');
const { Sequelize } = require('sequelize');
const role = require('./models/role');
// const employee = require('./models/employee');
// const department = require('./models/department');



const logotext = logo({
    name: "Employee Manager"
}).render();
console.log(logotext);
// startPrompt();




inquirer.prompt([
    {
        type:"list",
        name:"choice",
        message:"Choose an option",
        choices:[
            
            {
                name: "View all employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: "View all departments",
                value: "VIEW_DEPARTMENTS"
            },
            {
                name: "View all roles",
                value: "VIEW_ROLES"
            },
            {
                name: "Add employee",
                value: "ADD_EMPLOYEE"
            },
            {
                name: "Add Department",
                value: "ADD_Department"
            },
            {
                name: "Add Role",
                value: "ADD_ROLE"
            },
            {
                name: "Update Employee Role",
                value: "UPDATE_EMPLOYEE"
            },                
            {
                name: "Quit",
                value: "QUIT"
            }



        ]
    }
]).then(res => {
    console.log(res)
    let choice = res.choice;
    switch(choice){
        case "VIEW_EMPLOYEES":
            viewEmployees();
            break;
        case "VIEW_DEPARTMENTS":
            viewDepartments();
            break;
        case "VIEW_ROLES":
            viewRoles()
            break;
        case "ADD_EMPLOYEE":
            addEmployee();
            break;
        case "ADD_Department":
            addDepartment();
            break;
        case "ADD_ROLE":
            addRole();
            break;
        case "UPDATE_EMPLOYEE":
            updateRole();
            break;
        default:
            
            break;
            

    };
});




function viewEmployees(){
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("/n");
        console.table(employees)
        .then(() => loadMainPrompts);
    })
}

function viewRoles(){
    //select * from Roles
}
function viewDepartments(){
    //select * from departments
}















