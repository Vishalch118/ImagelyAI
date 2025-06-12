import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visual art.</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>AI Powered Text to Image generator.</h2>
                <p className='text-gray-600 mb-4'>Transform Your Ideas into Visually Stunning Images, this tool brings your prompts to life with just a few clicks. Simply imagine it, describe it, and watch it turn into eye-catching imagery—efforand dreamers alike, tlessly.Perfect for  creators, it makes visual storytelling faster and more accessible than ever. Unleash your creativity and turn your words into works of art in seconds.</p>
                
                <p className='text-gray-600'>Just type your prompt, and the AI instantly generates high-quality images. From product visuals to character designs—even concepts that don’t exist in the real world—everything is created effortlessly. Unleash the power of visual storytelling with Imagely AI and turn your ideas into stunning artwork in seconds.</p>
            </div>
        </div>
    </div>


  )
}

export default Description