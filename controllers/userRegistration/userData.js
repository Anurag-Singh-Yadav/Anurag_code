const user = require("../../model/userSchema");


exports.getUserData = async(req,res)=>{
    try{

        const { email } = req.body;
        if(!email){
            return res.status(400).json({error: "Email is required"});
        }
        const existingUser = await user.findOne({email});

        if(!existingUser){
            return res.status(400).json({error: "User does not exist"});
        }
        
        return res.status(200).json({
            success: true,
            message: "User data fetched successfully",
            name: existingUser.name,
            email,
            profile: existingUser.profile,
            bio:existingUser.bio, 
        });
        
    }catch(e){
        console.log(e);

        return res.status(500).json({
        error: "Internal Server Error",
        message: e.message,
        });
    }
}

exports.updateUserData = async(req,res)=>{
    try{
        const { profile, bio, name, email} = req.body;
        const existingUser = await user.findOne({email});
        if(!existingUser){
            return res.status(400).json({error: "User does not exist"});
        }
        if(profile){
            existingUser.profile = profile;
        }

        if(bio){
            existingUser.bio = bio;
        }
        if(name){
            existingUser.name = name;
        }
        await existingUser.save();

        return res.status(200).json({
            message: "User data updated successfully",
            success: true,
        })
    }catch(e){
        console.log(e);
        return res.status(500).json({
            error: "Internal Server Error",
            message: e.message,
        });
    }

}