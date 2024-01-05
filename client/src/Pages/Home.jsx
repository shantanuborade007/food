import React from 'react'
import hero from '../assets/hero.png'
import hero2 from '../assets/hero2.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import ImageGallery from '../components/ImageGallery'

const Home = () => {
  return (
    <div>
    
      <div className='flex gap-10 max-w-[80%] mx-auto m-10'>
          <div className='flex flex-col gap-10'>
                <h1
                className='text-4xl font-bold max-w-md'
                >Welcome to <span className='text-[#f06d06]'>Flavorful Delights! </span>Your Culinary Journey Starts Here.</h1>
                <p className='font-semibold text-gray-500 max-w-xl leading-9'>Unleash the chef within you and embark on a gastronomic adventure with Flavorful Delights – your ultimate destination for mouthwatering recipes and culinary inspiration. Whether you're a seasoned chef or a kitchen novice, our diverse collection of recipes caters to all tastes, skill levels, and dietary preferences.</p>
                <Link to="/viewrecipe">
                    <button
                    className='py-[8px] px-[18px] rounded-[8px] bg-orange-400 text-white font-bold text-xl '>
                        View Recipies
                    </button>
            </Link>  
          </div>
          <div>
            <img src={hero}/>
          </div>
      </div>

      <div className='flex gap-10 max-w-[80%] mx-auto m-10 flex-row-reverse mt-[200px]'>
          <div className='flex flex-col gap-10'>
                <h1
                className='text-4xl font-bold max-w-md'
                >Palate Perfection,<span className='text-[#f06d06]'>Start Cooking, Start Creating </span>Fresh and Seasonal Excellence.</h1>
                <p className='font-semibold text-gray-500 max-w-xl leading-9'>From classic comforts to bold international flavors, find your culinary muse. Our recipes cater to every palate and dietary preference</p>
                <Link to="/viewrecipe">
                    <button
                    className='py-[8px] px-[18px] rounded-[8px] bg-orange-400 text-white font-bold text-xl '>
                        View Recipies
                    </button>
                </Link>  
          </div>
          <div>
            <img src={hero2}/>
          </div>


      </div>

        <ImageGallery/>

      <Footer/>

    </div>
  )
}

export default Home