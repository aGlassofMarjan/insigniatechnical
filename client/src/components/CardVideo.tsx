"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { CirclePlus, MoveRight } from 'lucide-react';

type Recipe = {
  name: string;
  image: string;
  cuisine: string;
  caloriesPerServing: number;
};

const CardVideo = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes?select=name,image,cuisine,caloriesPerServing&limit=5');
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching the recipes', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>

      <div className='hidden lg:grid lg:grid-cols-6 lg:gap-4'>
        {recipes.map((recipe, index) => {
          if (index === 0) {
            return (
              <div className="col-span-4 row-span-2 bg-gray-600 rounded-md flex items-end shadow-md h-auto bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${recipe.image})` }}>
                {/* content */}
                <div className="text-white block w-full p-4 rounded-b-md bg-primary-content">
                  <p>{recipe.name}</p>
                  <div className="flex justify-start">
                    <p className='opacity-70'>{recipe.cuisine}, {recipe.caloriesPerServing} Calories</p>
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div className="col-span-2 bg-gray-600 rounded-md flex items-end shadow-md h-44 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${recipe.image})` }}>
                {/* content */}
                <div className="block w-full p-4 rounded-b-md bg-primary-content text-white">
                  <p>{recipe.name}</p>
                  <div className="flex justify-start text-sm">
                    <p className='opacity-70'>{recipe.cuisine}, {recipe.caloriesPerServing} Calories</p>
                  </div>
                </div>
              </div>
            )
          }
        })}

        <div className="col-span-2 bg-primary-content text-white flex rounded-md shadow-md items-center justify-center h-44">
          <div className="flex gap-2">
            <CirclePlus width={44} height={44} strokeWidth={1} />
            <p>Upload <br /> Your Own Video</p>
          </div>
        </div>

      </div>


      {/* Mobile */}
      <div className='lg:hidden'>
        <div className='w-full flex justify-between'>
          <p className='text-2xl font-semibold'>Videos</p>
          <div role="button" className='flex gap-1 hover:text-primary'>
            <p>Browse all videos </p>
            <MoveRight strokeWidth={1} />
          </div>
        </div>
        <div className="flex">
          <div className="carousel carousel-center space-x-4 p-4">
            {recipes.map((recipe, index) => (
              <div className="carousel-item items-end bg-primary-content rounded-md text-white w-80 h-60 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${recipe.image})` }}>
                <div key={index} className="block w-full p-4 rounded-b-md bg-primary-content text-white">
                  <div className='flex w-full justify-center'>
                  </div>
                  <p>{recipe.name}</p>
                  <div className="flex justify-start text-sm">
                    <p className='opacity-70'>{recipe.cuisine}, {recipe.caloriesPerServing} Calories</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="carousel-item items-end bg-primary-content rounded-md text-white w-80 h-60 bg-cover bg-center bg-no-repeat "
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
              <div className="block w-full p-4 rounded-b-md bg-primary-content text-white">
                <div className='flex w-full justify-center gap-2'>
                  <CirclePlus width={44} height={44} strokeWidth={1} />
                  <p className='text-sm'>Upload <br /> Your Own Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CardVideo