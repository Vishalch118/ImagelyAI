import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const {user,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()
  const onClickHandler=()=>{
    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20' initial={{opacity:0.2,y:100}} transition={{delay:0.2,duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>

        <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} viewport={{once:true}} className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-600'>Image</span>, in seconds.</h1>

        <p className='text-center max-w-xl mx-auto mt-5'>Turn your imagination into visuals in seconds - just type and watch the magic happen.</p>

        <button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>Generate Images <img src={assets.star_group} alt="" className='h-6'/></button>

        <div className='flex flex-wrap justify-center mt-16 gap-3'>
            {Array(6).fill('').map((item, index)=>(
                <img src={index%2===0?assets.sample_img_2:assets.sample_img_1} alt="" key={index} width={70} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 '/>
            ))}
        </div>

        <p className='mt-2 text-neutral-600'>Generated Images from Imagely</p>
    </motion.div>
  )
}

export default Header