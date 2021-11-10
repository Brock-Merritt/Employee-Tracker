const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();


console.log(' test to be sure it runnin')

const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'chants',
        database: 'department'
    }
)
const questions = [
    {
        type:"Input",
        name:"Title",
        message:"Title of project",
    },
    {
        type:"Input",
        name:"Description",
        message:"Short description of your project",
    },
    {
        type:"Input",
        name:"Installation",
        message:"Anything needed to install?",
        default:"inquirer, Jest"
    },
    {
        type:"input",
        name:"Usage",
        message:"What will this be used for",
    },
    {
        type:"confirm",
        name:"Contribution",
        message:"Do you have any contributors you would like to add?",
    },
    {
        type:"input",
        name:"Contributors",
        message:"Add any contributors if necessary",
    },
    {
        type:"Input",
        name:"Test",
        message:"What command runs the test?",
        default: "index app.js"
    },
    {
        type:"list",
        name:"License",
        message:"What license will you use?",
        choices:['MIT','Apache License 2.0','GNU','BSD 2']
    },{
        type:"Input",
        name:"Github",
        message:"Please enter your github Username",
    },
    {
        type:"Input",
        name:"Email",
        message:"Please enter your email",
    },
];














app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



function startPrompt(){
    inquirer.prompt(questions)
    //.then
}