//@desc Register new user
//@route POST /api/v1/users/register
//@access public 

const User = require("../../models/Users/User");
const bcrypt = require('bcryptjs');
const generateToken = require("../../utils/generateToken")

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({
        status: "Failed",
        message: "All fields (username, email, password) are required",
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        status: "Failed",
        message: "User already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
    });

  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: error.message || "Something went wrong",
    });
  }
};

//@desc Login  user
//@route POST /api/v1/users/login
//@access public 

exports.login = async(req, res) => {
    try{
        const { username, password } = req.body;
        // validate input
        if(!username || !password){
            return res.status(400).json({
                status:"Failed",
                message:"username and password are required"
            })
        }

        // Find user
        const user = await User.findOne({ username });
        if(!user){
            throw new Error("Invalid credentials")
        }
        // compare password
        const isMatch = await bcrypt.compare(password, user?.password)
        if(!isMatch){
            throw new Error("Invalid credentials")
        }
        user.lastlogin = new Date();
        await user.save();
        res.json({ 
          status: "success", 
          email:user?.email,
          _id: user?._id,
          username:user?.username,
          role: user?.role,
          token:generateToken(user)
         })
 
    }
    catch(err){
      res.json({status:"failed", message: err?.message})
    }
}

//@desc Profile  view
//@route GET /api/v1/users/profile/:id
//@access public 
