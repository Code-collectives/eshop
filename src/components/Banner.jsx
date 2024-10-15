import React from 'react'
import image1 from '../assets/website/image1.png'

const BannerData = {
  discount: "30% OFF",
  title: "Fine smile",
  date: "10 to 28 Jan",
  image: image1,
  title2: "Air Solo Beats",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet consecteur adispiscing elit",
  bgColor: "#f42c37",
}

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className='container'>
        <div style={{ backgroundColor: BannerData.bgColor }} className='grid grid-cols-1 md:grid-cols-3 gap-3 gap-6 items-center text-white rounded-3xl'>
          {/* First column */}
          <div className='p-6 sm:p-8'>
            <p className='text-sm'>{BannerData.discount}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{BannerData.title}</h1>
            <p className='text-sm'>{BannerData.date}</p>
          </div>

          {/* Second column */}
          <div className='h-full flex items-center'>
            <img src={BannerData.image} alt="Banner" className='scale-125 w-[250px] mx-auto drop-shadow-2xl object-cover' />
          </div>

          {/* Third column */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>{BannerData.title2}</p>
            <p className='text-3xl sm:text-5xl font-bold'>{BannerData.title3}</p>
            <p className='text-sm tracking-wide leading-5'>{BannerData.title4}</p>
  {/* Button */}
  <div>
            <button style={{ color: BannerData.bgColor }} className="bg-white py-2 px-4 rounded-full">
              Shop Now
            </button>
          </div>

          </div>

        
        </div>
      </div>
    </div>
  )
}

export default Banner
