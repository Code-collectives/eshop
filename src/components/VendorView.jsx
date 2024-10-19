import image2 from "../assets/website/image1.png";
import { FaRegEdit } from "react-icons/fa";

const gadgets = [
  {
    id: 1,
    img: image2,
    name: 'Smartphone',
    description: 'A high-end smartphone with excellent features.',
    price: 699.99,
  },
  {
    id: 2,
    img: image2,
    name: 'Smartphone',
    description: 'A high-end smartphone with excellent features.',
    price: 699.99,
  },
  {
    id: 3,
    img: image2,
    name: 'Smartphone',
    description: 'A high-end smartphone with excellent features.',
    price: 699.99,
  },
  {
    id: 4,
    img: image2,
    name: 'Smartphone',
    description: 'A high-end smartphone with excellent features.',
    price: 699.99,
  },
  {
    id: 5,
    img: image2,
    name: 'Laptop',
    description: 'A powerful laptop for all your needs.',
    price: 1299.99,
  },
  {
    id: 6,
    img: image2,
    name: 'Laptop',
    description: 'A powerful laptop for all your needs.',
    price: 1299.99,
  },
 
  
];

const VendorView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12%] p-6 mr-[20%] mb-[10%]">
      {gadgets.map((gadget) => (
        <div 
          key={gadget.id} 
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg shadow-lg p-4 transition-all w-72 h-96"  
        >
          <img src={gadget.img} alt={gadget.name} className="w-full h-40 object-cover rounded-md mb-4" />  
          <h2 className="text-xl font-bold mb-2">{gadget.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{gadget.description}</p>
          <div className="text-lg font-semibold mb-4">${gadget.price.toFixed(2)}</div>
          
         
          
          
          <div className="flex justify-between">
            <button className="  text-brandGreeen font-bold py-2 px-4  w-full mr-2">  
            <FaRegEdit />
            </button>
            <button className="  text-primary font-bold py-2 px-4  w-full">  
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VendorView;
