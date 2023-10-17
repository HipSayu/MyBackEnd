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
    // let AccountList = await AccountService.getListAccount();
    // return res.render('accountList.ejs', {AccountList})
    res.redirect('/Account/List')
}


const handleAccountList = async (req, res) => {
    let AccountList = await AccountService.getListAccount();
    return res.render('accountList.ejs', {AccountList})
}


const handleDeleteAccount = async (req, res) => {
    await AccountService.DeleteAccount(req.params.id)
    res.redirect('/Account/List')
}
const handleUpdateAccountPage = async (req, res) => {
    let ID = req.params.id
    let Account = await AccountService.GetAccountByID(ID)
    let AccountData = {}
    AccountData = Account ;
    // if (Account && Account.length > 0) {
    //     AccountData = Account[0]
    // }
    return res.render('accountUpdate.ejs', {AccountData})
}
const handleUpdateAccount = async (req, res) => {
    let ID = req.body.id;
    let UserName = req.body.UserName;
    let Email = req.body.Email;
    let Password = req.body.Password;
    console.log('check: ' , ID)
    await AccountService.UpdateAccountInfor(UserName, Email, Password, ID)
    res.redirect('/Account/List')

}

module.exports = {
    handleHelloWord,
    handleAccountCreatePage,
    handleCreateNewAccount,
    handleAccountList,
    handleDeleteAccount,
    handleUpdateAccountPage,
    handleUpdateAccount
}