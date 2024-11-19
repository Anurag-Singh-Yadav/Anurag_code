// User Registration and Authentication:
// Users should be able to create an account with their personal information, such as name, email, and password.
// Users should be able to log in and log out of their accounts securely.
const user = require("../../model/userSchema");


exports.signup = async(req,res)=>{
    try{
        const { email, password, name, bio, profile } = req.body;
        console.log(email,password,name,bio,profile);

        if(!email || !password || !name){
            return res.status(400).json({error: "All fields are required"});
        }
        const existingUser = await user.findOne({email});
        // cheking the user
        if(existingUser){
            return res.status(400).json({error: "User already exists"});
        }
        const newUser = new user({
            email,
            password,
            name,
            bio,
            profile,
        });

        await newUser.save();
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            error: "Internal Server Error",
            message: e.message,
        });
    }
}

