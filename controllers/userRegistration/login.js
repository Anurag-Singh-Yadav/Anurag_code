// User Registration and Authentication:
// Users should be able to create an account with their personal information, such as name, email, and password.
// Users should be able to log in and log out of their accounts securely.

const user = require("../../model/userSchema");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email,password);

    if (!email || !password) {
      return res.status(400).json({ 
        error: "All fields are required",
        message: "Please provide email and password",
    });}



    const existingUser = await user.findOne({email});
    if(!existingUser) {
        return res.status(400).json({ 
            error: "User does not exist",
            message: "User does not exist",
        });
    }
    console.log(existingUser.password);

    if(existingUser.password !== password) {
        return res.status(400).json({
                message: "Wrong user",
                success: false,            
        })
    }

    return res.status(200).json({
        message: "User logged in successfully",
        success: true,
    });


  } catch (e) {
    console.log(e);

    return res.status(500).json({
      error: "Internal Server Error",
      message: e.message,
    });
  }
};
