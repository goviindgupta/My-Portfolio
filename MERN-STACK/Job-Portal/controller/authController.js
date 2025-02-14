import User from "../models/userModel.js";

export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name) return next(new Error('Name is required'));
        if (!email) return next(new Error('Email is required'));
        if (!password || password.length < 6) return next(new Error('Password must be at least 6 characters long'));

        const existingUser = await User.findOne({ email });
        if (existingUser) return next(new Error('Email already registered, please login with a different email'));

        const user = await User.create({ name, email, password });
        const token = user.createJWT();

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                name: user.name,
                lastName: user.lastName || '',
                email: user.email,
                location: user.location || ''
            },
            token
        });
    } catch (error) {
        next(error);
    }
};

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return next(new Error('Please provide all fields'));

        const user = await User.findOne({ email }).select("+password");
        if (!user) return next(new Error('Invalid username or password'));

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return next(new Error('Invalid username or password'));

        user.password = undefined; // Hide password from response
        const token = user.createJWT();

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user,
            token,
        });
    } catch (error) {
        next(error);
    }
};
