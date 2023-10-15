const handleHelloWord = (req, res) => {
    return res.render('home.ejs')
}
const handleAccountCreate = (req, res) => {
    return res.render('accountCreate.ejs')
}


module.exports = {
    handleHelloWord,
    handleAccountCreate
}