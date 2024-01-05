import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import food3 from '../assets/food3.png'

const AddRecipe = () => {
   const [title, setTitle] = useState('');
   const [ingredients, setIngredients] = useState([{ name: '' }]);
   const [instructions, setInstructions] = useState([{ step: '' }]);
   const [image, setImage] = useState('');
   const [userId, setUserId] = useState('');
   const [pictures, setPictures] = useState([]);

   const onDrop = (pictureFiles, pictureDataURLs) => {
       setPictures(pictureDataURLs);
   };

   const handleIngredientChange = (i, event) => {
       const values = [...ingredients];
       values[i].name = event.target.value;
       setIngredients(values);
   };

   const handleInstructionChange = (i, event) => {
       const values = [...instructions];
       values[i].step = event.target.value;
       setInstructions(values);
   };

   const removeIngredient = (index) => {
    const values = [...ingredients];
    values.splice(index, 1);
    setIngredients(values);
   };

  const removeInstruction = (index) => {
    const values = [...instructions];
    values.splice(index, 1);
    setInstructions(values);
   };

   const handleImage =(e)=>{
    const file=e.target.files[0];
    setFileToBase(file)
    console.log(file)
   }

   const setFileToBase = (file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
      setImage(reader.result);
    }
   }

//    const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('ingredients', JSON.stringify(ingredients));
//     formData.append('instructions', JSON.stringify(instructions));
//     formData.append('image', image);
//     formData.append('file', image);
//     console.log(image)
//     const response = await fetch('/newrecipes', {
//         method: 'POST',
//         body: formData,
//     });
//     const data = await response.json();
//     console.log(data);
// };

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('ingredients', JSON.stringify(ingredients));
      formData.append('instructions', JSON.stringify(instructions));
      formData.append('image', image);

      const { data } = await axios.post('/newrecipes', formData);

      if (data.success === true) {
          // Reset form fields or perform any necessary actions
          console.log('Recipe created successfully');
          toast.success("Recipe Created Succesfully !")
      }

      console.log(data);
  } catch (error) {
      console.error('Error:', error.message);
      toast.error("Some error occoured while creating Recipe")
  }
};


   return (
   
      <>

      
         <form onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50%] m-auto mt-20">
           <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title:
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
               </label>
           </div>
          
              {ingredients.map((ingredient, i) => (
                <div key={i} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`ingredient${i}`}>
                        Ingredient {i + 1}:
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`ingredient${i}`} type="text" placeholder={`Ingredient ${i + 1}`} value={ingredient.name} onChange={e => handleIngredientChange(i, e)} />
                    </label>
                    <button type="button" onClick={() => removeIngredient(i)} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                        - Remove Ingredient
                    </button>
                </div>
              ))}
           <button type="button" onClick={() => setIngredients([...ingredients, { name: '' }])} className="bg-[#9A031E] hover:bg-[#EE9322] text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
               + Add Ingredient
           </button>
                  {instructions.map((instruction, i) => (
          <div key={i} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`instruction${i}`}>
                  Instruction {i + 1}:
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={`instruction${i}`} type="text" placeholder={`Instruction ${i + 1}`} value={instruction.step} onChange={e => handleInstructionChange(i, e)} />
              </label>
              <button type="button" onClick={() => removeInstruction(i)} className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                  - Remove Instruction
              </button>
             </div>
                ))}
           <button type="button" onClick={() => setInstructions([...instructions, { step: '' }])} className="bg-[#9A031E] hover:bg-[#EE9322] text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
               + Add Instruction
           </button>
           <div>
                <input 
                className='bg-[#EE9322] p-1 mt-3 mb-3 rounded-md font-semibold text-white'
                type="file" id="avatar" name="avatar" onChange={handleImage}/>
           </div>      
           <div className="flex items-center justify-between">
               <button className="bg-[#9A031E] hover:bg-[#EE9322] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[50%] mx-auto" type="submit">
                  Submit
               </button>
           </div>
       </form>
       <div  className='mx-auto w-[50%]'>
            <img src={food3}/>
        </div>
      </>
   );
};

export default AddRecipe;
