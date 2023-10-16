import AccountService from '../service/AccountService'




const handleHelloWord = (req, res) => {
    return res.render('home.ejs')
}
const handleAccountCreatePage = (req, res) => {
    return res.render('accountCreate.ejs')
}

const handleCreateNewAccount = async (req, res) => {
    let Email = req.body.Email;
    let UserName = req.body.UserName;
    let Password = req.body.Password;
    await AccountService.CreateNewAccount(Email, Password, UserName)
    let AccountList = await AccountService.getListAccount();
    return res.render('accountList.ejs', {AccountList})
}


const handleAccountList = async (req, res) => {
    let AccountList = await AccountService.getListAccount();
    return res.render('accountList.ejs', {AccountList})
}
const handleDeleteAccount = async (req, res) => {
    await AccountService.DeleteAccount(req.params.username)
    res.redirect('/Account/List')
}

module.exports = {
    handleHelloWord,
    handleAccountCreatePage,
    handleCreateNewAccount,
    handleAccountList,
    handleDeleteAccount
}