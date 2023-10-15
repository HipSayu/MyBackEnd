import mysql from 'mysql2';
import bcrypt from 'bcrypt';

//create the connection to dababase
const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    database : 'hipdzvaolol'
});

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let  hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword
}
const CreateNewAccount = (Email, Password, UserName) =>{
    let hashPass= hashPassword(Password)

    connection.query(
        'INSERT INTO account (Email, Password, Username) VALUES (?, ?, ?) ',[Email, hashPass, UserName],
        function (err, results, fields){
            if (err){
                console.log(err)
            }
        }
    );
}

const getListAccount = () => {
    let userList = []
    connection.query(
        'SELECT * FROM account',
        function(err, results, fields){
            if (err){
                console.log(err)
            }
            console.log('check userlist: ', results)
        }
    )
   
        
}
module.exports = {
    CreateNewAccount,
    getListAccount
}