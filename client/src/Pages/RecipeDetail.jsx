import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`https://ecofood.onrender.com/api/v1/recipe/${id}`)
      .then(response => setRecipe(response.data.data));
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const parseArray = (arrayString) => {
    try {
      const jsonArray = JSON.parse(arrayString.replace(/\\/g, ''));

      // Check if it's an array of objects or a simple array
      if (jsonArray.length && typeof jsonArray[0] === 'object') {
        // If it's an array of objects, extract the values
        return jsonArray.map(item => Object.values(item)[0]);
      } else {
        // If it's a simple array, return as is
        return jsonArray;
      }
    } catch (error) {
      console.error('Error parsing array string:', error);
      return [];
    }
  };

  return (
    <div className="container mx-auto mt-10 max-w-[70%] bg-[#cbf3f0]">
      <div className="bg-white shadow-md rounded p-6">
        <h1 className="text-3xl font-bold mb-5 text-[#494849]">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-5" />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {parseArray(recipe.ingredients[0]).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <h2 className="text-2xl font-semibold mb-3">Instructions:</h2>
          <div className='border rounded-md p-5'>
                <ol className="list-decimal list-inside ">
                    {parseArray(recipe.instructions[0]).map((step, index) => (
                    <li
                        className='border p-2 m-2 hover:drop-shadow-md hover:scale-105 transition-all'
                     key={index}>{step}</li>
                    ))}
                </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
