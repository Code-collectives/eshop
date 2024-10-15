import React from 'react'
import Button from '../shared/Button'
import image1 from '../assets/website/console.png'
import image2 from '../assets/website/image2.png'
import image3 from '../assets/website/speaker.png'
function Category2() {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'>
            {/* first col */}
             <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100/90
         text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>   
                    <p  className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold
                    opacity-40 mb-2'>Laptop</p> 
                    <Button 
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}/>
                </div>
            </div>
            <img src={image1} alt=""  
            className='w-[250px] absolute  bottom-36 translate-y-1/2 -right-2'/>
        </div>
        {/* second col */}
        <div className='py-10 pl-5 bg-gradient-to-br from-brandGreeen/90 to-brandGreeen/90
         text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>   
                    <p  className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold
                    opacity-40 mb-2'>Gadget</p> 
                    <Button 
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text- brandGreeen"}/>
                </div>
            </div>
            <img src={image2} alt=""  
            className='w-[320px] absolute bottom-0'/>
        </div>

{/* third col */}
        <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70
         text-white rounded-3xl relative h-[320px] flex items-start'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>   
                    <p  className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl font-bold
                    opacity-20 mb-2'>Earphone</p> 
                    <Button 
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"brandBlue"}/>
                </div>
            </div>
            <img src={image3} alt=""  
            className='w-[200px]  -right-0 absolute buttom-0'/>
        </div>

      </div>
      
    </div>
    </div>
  )
}

export default Category2
