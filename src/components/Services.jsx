import { data } from "autoprefixer";
import { FaCarSide, FaHeadphonesAlt,FaWallet, FaCheckCircle  } from "react-icons/fa";

const ServiceData = [
     {
        id: 1,
        icon:<FaCarSide className="text-4xl md:text-5xl text-primary" />,
        title:"Free Shipping",
        description:"Free Shipping On All Oder",
     },

     {
        id: 1,
        icon:<FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
        title:"Safe Money",
        description:"30 Days Money Back",
     },


     {
        id: 1,
        icon:<FaWallet className="text-4xl md:text-5xl text-primary" />,
        title:"Secure All Payment",
        description:"All Payment Secure",
     },
  
     {
        id: 1,
        icon:<FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
        title:"Online Support 24/7",
        description:"Technical Support 24/7",
     },



]
    
    
    
    
    
    
    
    
const Services = () => 
    {
  return (
    <div>
        <div className='container mt-14 md:mt-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4
            gap-y-8'>
               {ServiceData.map((data) =>(
            <div className="flex flex-col items-start sm:flex-row gap-4">
                 {data.icon}
                 <div >
                 <h1 className="lg:text-xl font-bold">{data.title}</h1>
                 <h1 className="text-gray-400 text-sm">{data.description}</h1>
                 </div>
            </div>
               ))}
            
            </div>
        </div>
      
    </div>
  )
}

export default Services
