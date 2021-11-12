const inquirer = require('inquirer');
const mysql = require('mysql2');
const { inherits } = require('util');
const db = require('./db');
require('console.table');
const logo = require('asciiart-logo');
const { prompt } = require('inquirer');
const express = require('express')
const app = express();
const port = 3001;




init();


console.log(' test to be sure it runnin')

function startPrompt(){
    inquirer.prompt([
        {
            type:"list",
            name:"Type",
            message:"Choose an option",
            choices:[
                // 'view all departments', 'view all roles', 'view all employees', ' add a department', 'add a role', 'add an employee', 'update employee role'
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


            ]
        }
    ])
    .then(res => {
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

        };
    })
    
}


function viewEmployees(){
    
}

function init(){
    const logotext = logo({
        name: "Employee Manager"
    }).render();
    console.log(logotext);
    startPrompt();
}










app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



