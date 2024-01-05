// Recipe Model
const mongoose=require("mongoose")

const recipeSchema = new mongoose.Schema({
    title: { 
        type: String,
         required: true
    },

    ingredients: { 
        type: [String],
         required: true
     },

    instructions: {
         type: [String], 
         required: true 
     }, 
     image: {
             type: String 
     },
    userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
    },
  });
  module.exports=mongoose.model("recipe",recipeSchema);