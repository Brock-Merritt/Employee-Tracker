const connection = require('./connection')

class DB {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.promise().query('SELECT employee');
    }
    createEmployee(employee){
        return this.connection.promise().query(' INSERT INTO employee SET ?', employee);
    }
    removeEmployee(employeeid){
        return this.connection.promise().query('DELETE FROM employee WHERE id = ?', employeeid);
    }
 
}




module.exports = new DB(connection);
