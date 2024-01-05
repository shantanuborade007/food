import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import axios from 'axios';

const View = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/allrecipes')
      .then(response => {
        setRecipes(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      });
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col'>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="px-4 py-2 m-6 mx-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-[70%]"
      />
      {loading ? (
        <div className="loader text-center"></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[70%] mx-auto m-14">
          {filteredRecipes.map((recipe) => (
            <Link key={recipe._id} to={`/recipe/${recipe._id}`} className="flex items-center justify-center">
              <div className="recipe-card bg-cover bg-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-500 ease-in-out w-full h-64">
                <Tippy content={<span>{recipe.title}</span>}>
                  <img src={recipe.image} alt={recipe.title} className="object-cover w-[100%] h-[100%] hover:scale-105 hover:drop-shadow-md transition-all" />
                </Tippy>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default View;
