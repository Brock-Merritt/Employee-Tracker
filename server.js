const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db');
require('console.table');
const logo = require('asciiart-logo');


Init();



function Init(){
    const logotext = logo({
        name: "Employee Manager"
    }).render();
    console.log(logotext);
    startPrompt();
};


function startPrompt(){
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
                inquirer.prompt([{
                    type:"input",
                    name:"whats the name of the person you would like to add",
                }])
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
                quitFunction();
                break;
        };
    });
}

function viewEmployees(){
    db.findAll()
    .then(rows => {
        console.table(rows);
    }).then(() => {
        return startPrompt();
    }) 
}

function viewRoles(){
    db.findRoles()
    .then(rows => {
        console.table(rows);
    }).then(() => {
        return startPrompt();
    })
}

function viewDepartments(){
    db.findDepartment()
    .then(rows => {
        console.table(rows);
    }).then(() => {
        return startPrompt();
    })
}

function addEmployee(){
    db.addEmployees()
    .then(rows => {
        console.table(rows);
    }).then(() => {
        return startPrompt();
    })
}

function addRole(){
    db.addRoles()
    .then(rows => {
        console.table(rows);
    }).then(() => {
        return startPrompt();
    })
}

function addDepartment(){
    db.addDepartments()
    .then(rows => {
        console.table(rows);
    }).then(() => {
        return startPrompt();
    })
}

function quitFunction(){
    process.exit();
}