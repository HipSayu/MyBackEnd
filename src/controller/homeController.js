import AccountService from '../service/AccountService'




const handleHelloWord = (req, res) => {
    return res.render('home.ejs')
}
const handleAccountCreatePage = (req, res) => {
    return res.render('accountCreate.ejs')
}

const handleCreateNewAccount = (req, res) => {
    let Email = req.body.Email;
    let UserName = req.body.UserName;
    let Password = req.body.Password;
    AccountService.getListAccount();
    // AccountService.CreateNewAccount(Email, Password, UserName)
   


    return res.send('CreateAccount')
}

module.exports = {
    handleHelloWord,
    handleAccountCreatePage,
    handleCreateNewAccount
}