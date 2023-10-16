import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import bluebird from 'bluebird';




const salt = bcrypt.genSaltSync(10);
const hashPassword = (userPassword) => {
    let  hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword
}

const CreateNewAccount = async (Email, Password, UserName) =>{
        //create the connection to dababase
        const connection = await mysql.createConnection(
            {
                host:'localhost', 
                user : 'root', 
                database : 'hipdzvaolol', 
                Promise : bluebird
            }
        );
    //hass password
    let hashPass= hashPassword(Password)
    
    //Insert
    try {
        const [rows, fields] = await connection.execute(
                'INSERT INTO account (Email, Password, Username) VALUES (?, ?, ?)',
                [Email, hashPass, UserName]
            );
        return rows;
    } catch (error) {
        console.log('check error', error)
    }
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


const DeleteAccount = async (UserName) =>{
        //create the connection to dababase
        const connection = await mysql.createConnection(
            {
                host:'localhost', 
                user : 'root', 
                database : 'hipdzvaolol', 
                Promise : bluebird
            }
        );
        //DELETE
        try {   
            const [rows, fields] = await connection.execute(
                    'DELETE FROM account WHERE UserName = ?',
                    [UserName]
                );
            return rows;
        } catch (error) {
            console.log('check error', error)
        }
}


module.exports = {
    CreateNewAccount,
    getListAccount,
    DeleteAccount
}