const getLogin = (req, res) => {
    res.render('login');
};

const postLogin = (req, res) => {
    const { email } = req.body;
    req.session.email = email;
    res.cookie('cookie', email, {maxAge: 900000, httpOnly: true});
    res.redirect('/auth/dashboard');
}

const getDashboard = (req, res) => {
    if (!req.session.email) {
        return res.redirect ('/auth/login');
    }
    res.render('dashboard', { email: req.session.email });
}



module.exports = {
    getLogin,
    postLogin,
    getDashboard
};