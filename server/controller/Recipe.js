const Recipe = require ('../models/Recipe')
const cloudinary = require('cloudinary').v2;
exports.addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      
    });

    const savedRecipe = await newRecipe.save();

    res.status(201).json({
      success: true,
      data: savedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};


function isSupported(type,supportedType) {
  return supportedType.includes(type)
}

async function uploadTocloudinary(file,folder,quality){

  const options={folder};
  console.log('log2')
  // console.log("temp file path", file.tempFilePath);
  if(quality){
      options.quality=quality;
  }
  options.resource_type = "auto";
  console.log('log3')  
  // return await cloudinary.uploader.upload(file, options);
  // return await cloudinary.uploader.upload(file.path, options);
  return await cloudinary.uploader.upload(file.tempFilePath,options);
}

// exports.addRecipeWithImage = async (req, res) => {
//   try {
//     const { title, ingredients, instructions } = req.body;

//     const file=req.files.imageFile;

//     const supportedType=["png","jpeg","jpg"]
//     const fileType=file.name.split('.')[1].toLowerCase();
//     if(!isSupported(fileType,supportedType)){
//         return res.status(400).json({
//             success:false,
//             message:"File format is not supported"
//         })
//     }
//     console.log('log1')
//     const response=await uploadTocloudinary(file,"sample");
   

//         // res.status(200).json({
//         //     success:true,
//         //     message:"Image successfully uploaded ! "
//         // })
//     const newRecipe = new Recipe({
//       title,
//       ingredients,
//       instructions,
//       image:response.secure_url,
//     });

//     const savedRecipe = await newRecipe.save();

//     res.status(201).json({
//       success: true,
//       data: savedRecipe,
//     });
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       success: false,
//       message: 'Server Error',
//     });
//   }
// };

// ************* this is the initial controller ********************

exports.addRecipeWithImage1 = async (req, res) => {
  try {
    console.log(req.body)
    const { title, ingredients, instructions } = req.body;
    const file=req.files.imageFile;
 
    const supportedType=["png","jpeg","jpg"];
     const fileType=file.name.split('.')[1].toLowerCase();
    if(!isSupported(fileType,supportedType)){
        return res.status(400).json({
            success:false,
            message:"File format is not supported"
        })
    }
    console.log('log1')
    
     const response = await uploadTocloudinary(file, "sample"); 
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      image:response.secure_url,
    });
 
    const savedRecipe = await newRecipe.save();
 
    res.status(201).json({
      success: true,
      data: savedRecipe,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
 };





exports.addRecipeWithImage = async (req, res) => {
  try {
    // console.log(req.body)
    const { title, ingredients, instructions, image } = req.body;
   
 
    // const supportedType=["png","jpeg","jpg"];
    //  const fileType=file.name.split('.')[1].toLowerCase();
    // if(!isSupported(fileType,supportedType)){
    //     return res.status(400).json({
    //         success:false,
    //         message:"File format is not supported"
    //     })
    // }
    console.log('log1')
    
    //  const response = await uploadTocloudinary(file, "sample"); 
    const response = await cloudinary.uploader.upload(image, {
      folder: "sample"
    })
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      image:response.secure_url,
    });
 
    const savedRecipe = await newRecipe.save();
 
    res.status(201).json({
      success: true,
      data: savedRecipe,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
 };






















exports.getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
  
      res.status(200).json({
        success: true,
        data: recipes,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server Error',
      });
    }
  };




  exports.getRecipeById = async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
        return res.status(404).json({
          success: false,
          message: 'No recipe found with this ID',
        });
      }
      res.status(200).json({
        success: true,
        data: recipe,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server Error',
      });
    }
   };


