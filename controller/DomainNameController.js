const UserDomain = require("../model/UserRegister");

exports.checkDomainExistence = async (req, res) => {
  try {
    const { username,id } = req.body;
    const validate = await UserDomain.findOne({ username: username });
    
    if (validate?._id) {
      if (Number(validate?.tokenId) === Number(id)) {
        return res.status(200).json({
          success: true,
          message: "Login Successfull",
  
          validate,
        });
     
      } else {
        return res.status(405).json({
          success: false,
          message: "Token Id is Not Valid",
        });
  
      }
    } else {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
  
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};


