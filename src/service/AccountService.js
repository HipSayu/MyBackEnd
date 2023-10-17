import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import bluebird from 'bluebird';
import db from '../models/index'



const salt = bcrypt.genSaltSync(10);
const hashPassword = (userPassword) => {
    let  hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword
}

const CreateNewAccount = async (Email, Password, UserName) =>{
    let hasPas = hashPassword(Password)
       try {
            await db.account.create({
                UserName : UserName,
                Email: Email,
                Password :hasPas,
            })
       } catch (error) {
            console.log('check Error: ', error)
       }
       
}

const getListAccount = async () => {
    let users = [];
    try {
        users = await db.account.findAll();
    } catch (error) {
        console.log('check error', error)
    }
    return users;

}


const DeleteAccount = async (ID) =>{
        //DELETE
        try {   
           await db.account.destroy({
            where : {id : ID}
           })
        } catch (error) {
            console.log('check error', error)
        }
}

const GetAccountByID = async (ID) =>{
    try {   
        let Account = {}
        Account = await db.account.findOne({
            where : {id : ID}
        })
        
        return Account.get({plain : true});
    } catch (error) {
        console.log('check error', error)
    }
}
const UpdateAccountInfor = async (UserName, Email, Password, ID) => {
     //create the connection to dababase
     let hasPas = hashPassword(Password)
    
    //Get
    try {   
       await db.account.update(
        {   UserName : UserName, 
            Email:Email,
            Password:hasPas
        },
        {
            where : {
                id : ID
            }
        }
       )
    } catch (error) {
        console.log('check error', error)
    }
}

module.exports = {
    CreateNewAccount,
    getListAccount,
    DeleteAccount,
    GetAccountByID,
    UpdateAccountInfor
}