import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import bluebird from 'bluebird';




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

const getListAccount = async () => {
    //create the connection to dababase
    const connection = await mysql.createConnection(
        {
            host:'localhost', 
            user : 'root', 
            database : 'hipdzvaolol', 
            Promise : bluebird
        }
    );

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM account');
        return rows;
    } catch (error) {
        console.log('check error', error)
    }
   
        
}
module.exports = {
    CreateNewAccount,
    getListAccount
}