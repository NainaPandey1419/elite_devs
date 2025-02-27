import User from "../models/user.model.js";
import ApiError from "../utills/error.utills.js";
import emailValidator from "email-validator";
import cloudinary from "cloudinary";
import fs from "fs/promises";



const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, 
  httpOnly: true,
  secure: true, // Secure only in production
  sameSite: "None",
};

const register = async function (req, res, next) {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return next(new ApiError(409, "Every field is required"));
  }
  const valid = emailValidator.validate(email);

  if (!valid) {
    return next(new ApiError(409, "Enter a valid email id"));
  }

  const emailExist = await User.findOne({ email });

  if (emailExist) {
    return next(new ApiError(409, "User is already exist"));
  }

  
  const user = await User.create({
    fullName,
    email,
    password,
    avatar: {
      public_id: null,
      secure_url: null,
    },
  }); 

  if (!user) {
    return next(new ApiError(409, "User is not created"));
  }
  try {
    if (req.file) {
        await cloudinary.v2.uploader.upload(
          req.file.path,
          {
            folder: "EliteDevs",
            width: 250,
            hight: 250,
            gravity: "face",
            crop: "fill",
          },
          (error, result) => {
            
            if (result) {
              fs.unlink(req.file.path, (err) => {
                if (err) {
                  console.error('Error deleting file:', err);
                  return next(err);
                }
                console.log(`File ${req.file.filename} deleted from uploads folder.`);
              });
              user.avatar.public_id=result.public_id;
              user.avatar.secure_url=result.secure_url;
            }
          }
        );
      }
  } catch (error) {
    return next(new ApiError(409, error.message)); 
  }
  await user.save();
  user.password = undefined;
  const token = await user.generateJWTtoken();
  res.cookie("token", token, cookieOptions);
  
  

  return res.status(202).json({
    success: true,
    message: "Registered Successfully",
    data: user,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ApiError(409, "Every field is required"));
  }

  const user = await User.findOne({ email }).select("+password");
  
  if (!user) {
    return next(new ApiError(409, "Unautherised access"));
  }
  if (!(await user.comparePassword(password))) {
    return next(new ApiError(409, "Incorrect password"));
  }
  const token = await user.generateJWTtoken();
  res.cookie("token", token, cookieOptions);

  return res.status(202).json({
    success: true,
    message: "user loged in sucessfully",
    data:user
  });
};

const logout = async (req, res) => {
  res.cookie("token", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });
  res.status(202).json({
    success: true,
    message: "user logged out sucessfully",
  });
};

const profile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    res.status(202).json({
      success: true,
      message: " this is user Details",
      data: user,
    });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};


// const changePassword = async function (req, res, next) {
//   const id = req.user.id;
//   const { oldPassword, newPassword } = req.body;
 
//   if (!oldPassword || !newPassword) {
//     return next(new ApiError(400, "Every field is required "));
//   }

//   const user = await User.findById(id).select("+password");
//   if (!user) {
//     return next(new ApiError(404, "User does not exist"));
//   }

//   if (await !user.comparePassword(oldPassword)) {
//     return next(new ApiError(400, "Enter your correct password"));
//   }

//   user.password = newPassword;
//   await user.save();
//   user.password = undefined;

//   return res.status(202).json({
//     success: true,
//     message: "Your Password is Reset successfuly",
//   });
// };

// const updateProfile = async (req, res, next) => {
//    const id = req.user.id;
  
//   const {fullName}= req.body;

//   const user = await User.findById(id);
  
//   if (!user) {
//     return next(new ApiError(400, "Unautherized access"));
//   }
 

//   if (fullName) {
//     user.fullName = fullName;
//   }
//   if (req.file) {
//     await cloudinary.v2.uploader.destroy(user.avatar.public_id);
//     try {
//       const result = await cloudinary.v2.uploader.upload(req.file.path, {
//         folder: "lms",
//         width: 250,
//         hight: 250,
//         gravity: "face",
//         crop: "fill",
//       });
//       if (result) {
//         user.avatar.public_id = result.public_id;
//         user.avatar.secure_url = result.secure_url;
//         fs.unlink(req.file.path, (err) => {
//           if (err) {
//             console.error('Error deleting file:', err);
//             return next(err);
//           }
//         });
//       }
//     } catch (error) {
//       return next(
//         new ApiError(500, error.message  || "file not uploaded please try again ")
//       );
//     }

//   }
   
//    await user.save()
//    return res.status(202).json({
//     success: true,
//     message: "Your profile is Updated successfuly",
//     data: user
//   });
// };

export {
  register,
  login,
  logout,
  profile,
};
