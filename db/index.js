const connection = require('./connection');


function findAll(){
    return connection.promise().query('SELECT * FROM `employee`')
    .then( ([rows,fields]) => {
        return rows;
    });
    
}


function findRoles(){
    return connection.promise().query('SELECT * FROM `role`')
    .then( ([rows,fields]) => {
        return rows;
    });
}


function findDepartment(){
    return connection.promise().query('SELECT * FROM `department`')
    .then( ([rows,fields]) => {
        return rows;
    });
}

function addEmployees(){
    return connection.promise().query('INSERT INTO `employee` VALUES ()')
    .then( ([rows,fields]) => {
        return rows;
    });
}
function addRoles(){
    return connection.promise().query('INSERT INTO `role` VALUES ()')
    .then( ([rows,fields]) => {
        return rows;
    });
}
function addDepartments(){
    return connection.promise().query('INSERT INTO `department` VALUES ()')
    .then( ([rows,fields]) => {
        return rows;
    });
}


module.exports = {findAll, findRoles, findDepartment, addEmployees, addDepartments, addRoles};