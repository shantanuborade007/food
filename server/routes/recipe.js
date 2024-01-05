const express=require("express")
const router=express.Router();
const {addRecipe,getAllRecipes} = require('../controller/Recipe')
const {addRecipeWithImage,addRecipeWithImage1,getRecipeById} = require('../controller/Recipe')


router.post('/addrecipes', addRecipe);
router.post('/newrecipes',addRecipeWithImage)
router.get('/allrecipes',getAllRecipes);
router.post('/temp',addRecipeWithImage1);
router.get('/recipe/:id', getRecipeById);




module.exports=router;
