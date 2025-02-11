const express = require('express')
require('./db/conn')
const path = require('path')
const app = express()
const hbs = require('hbs')
const Register = require('./models/registers')
const exp = require('constants')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const port = process.env.PORT || 8000
const staticPath = path.join(__dirname,'../public')
const templatesPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
// console.log(path.join(__dirname,'../templates/views'))
app.use(express.static(staticPath))
app.set('view engine','hbs')
app.set('views',templatesPath)
hbs.registerPartials(partialsPath)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.status(200).send('Hello from the other side')
})
app.get('/register', async(req,res) => {
    try {
        res.status(200).render('register')
    }catch(e) {
        res.status(404).send(e)
    }
})
app.post('/login',async(req,res)=>{
    try{
        const email = req.body.email 
        const password = req.body.password 
        const userEmail = await Register.findOne({email})

        const isMatch = await bcrypt.compare(password,userEmail.password)

        if (isMatch) {
            res.status(201).render('index')
        }else{
            res.send('invalid login details')
        }
    }catch(e){
        res.status(400).send(e)
    }
})
app.post('/register', async (req, res) => {
    try {
        const { firstname, lastname, email, gender, phone, age, password, confirmpassword } = req.body;

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).send('Passwords do not match');
        }

        // Check if the email is already registered
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email already exists. Please use a different email.');
        }

        // Create new user instance
        const registerEmployee = new Register({
            firstname,
            lastname,
            email,
            gender,
            phone,
            age,
            password,
            confirmpassword
        });

        // Generate Auth Token
        const token = await registerEmployee.generateAuthToken();

        // Save user to database
        await registerEmployee.save();

        // Redirect to home page (index) after successful registration
        res.status(201).render('index');

    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).send("Internal Server Error");
    }
});


// const bcrypt = require('bcryptjs')

// const securePassword = async(password) => {
//     const passwordHash = await bcrypt.hash(password,10)
//     console.log(passwordHash)
// }

// securePassword('Govind')

// const createToken = async() => {
//    const token = await jwt.sign({_id:"67a96a42f89fcd9cbd253cdf"},"secretkey")
//    console.log(token)

//    const userVer = await jwt.verify(token,"secretkey")
//    console.log(userVer)
// }

// createToken()

app.listen(port,() => {
    console.log(`connection is running at port : ${port}`)
})
