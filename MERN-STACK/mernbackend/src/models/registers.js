const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

// 🔹 Generate JWT Token and Save It
employeeSchema.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign(
            { _id: this._id.toString() }, 
            "A8x!zP@1Qw$eR4tY2uVbN7cM#oL6dFgH", 
            { expiresIn: "1h" } // Token expires in 1 hour
        );

        // Save token in database
        this.tokens = this.tokens.concat({ token });
        await this.save();
        
        return token;
    } catch (e) {
        console.error("Error generating auth token:", e);
    }
};

/// Hash password before saving to DB
employeeSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10); // Hash confirmpassword correctly
    }
    next();
});


const Register = mongoose.model('Register', employeeSchema);

module.exports = Register;
