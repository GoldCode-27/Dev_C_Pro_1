import React from 'react'
import { ArrowRight, ShoppingCart, User, Heart } from 'lucide-react';
import coverImage from '../assets/Cover Image.png'
function ImageContainer() {
  return (
    
     <div className="relative w-full h-[400px] "  >
       <img src={coverImage} alt="Cover" className="absolute object-cover w-full h-full pl-0 ml-0" />
     
    
     <div className="absolute inset-0 flex flex-col items-left justify-left text-left px-10 py-15 text-red-500 font-bold text-4xl mt-5">
     ADICLUB <br /> IS SHOWING OFF.
     </div>
     
     <div className="absolute inset-0 flex flex-col items-left justify-left text-white text-left px-10 py-20 mt-20">
        Exclusive release for our members and more ways <br /> to unlock these things that you love.
          
        <a href="#" className="bg-white-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 ml-2 mb-5 mt-5 inline-block w-40">
        <ArrowRight  className="inline-block mr-5" size={31}/>
          SEE MORE
        </a>
        <a href="#" className="bg-white-500 text-white px-4 py-2 rounded-md hover:bg-green-60 ml-2 font-bold inline-block w-40">
        <ArrowRight className="inline-block  mr-5 font-bold" size={31}/>
          BUY NOW
        </a>
     </div>

     <div>
        
     </div>
    </div>
  )
}

export default ImageContainer
