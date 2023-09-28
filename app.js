require('dotenv').config();

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const Account = require('./src/models/Account');


const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'src', 'public')));
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    const [accounts] = await Account.all();
    res.render('pages/home', {accounts});
});

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.get('/about', (req, res) => {
    res.render('pages/about');
})

app.get('/get-account-manager', (req, res) => {
    res.render('pages/get-account-manager')
})

app.get('/enroll', (req, res) => {
    res.render('pages/enroll');
})

app.get('/sell-account', (req, res) => {
    res.render('pages/sell-account');
})


app.post('/sell-account', async (req, res) => {

    try {
        await Account.create(req.body);

    } catch (error) {
        console.log(`Encountered error while adding account: ${error.message}`)
    }

    res.redirect('/')

})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} - http://127.0.0.1:${PORT}`)
});

