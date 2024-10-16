import React, { useState } from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox toggle
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl">
      
        <div className="flex items-center justify-center space-x-4 mb-6">
       
          <div  className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>eShop</div>
          
      
          <div className="border-l-2 h-12 border-gray-400"></div>

         
          <h1 className="text-2xl font-bold">Terms of Service</h1>
        </div>

     
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Convallis turpis sit donec egestas.
           Arcu volutpat aliquet viverra ullamcorper tellus sed amet mattis urna. 
           Auctor sed placerat nisi mauris a orci. Augue quisque volutpat at hac aliquam ante. Ac integer maecenas consectetur sit etiam.
            Nulla proin ipsum molestie quis et. Varius aliquam id nisi a pharetra lectus. Duis ac erat dui id quisque viverra sollicitudin tincidunt ornare. Amet massa leo mollis ultricies diam. Nulla tortor a fringilla nunc. Enim iaculis adipiscing tristique commodo quis. Velit auctor et aliquam nec posuere consequat nisl. Sed pellentesque diam eu hendrerit nascetur eget tellus cras cras. Adipiscing quam lorem suspendisse cursus malesuada nec venenatis. Et facilisis elit dolor neque velit.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <input
            type="checkbox"
            id="accept-terms"
            className="h-4 w-4 text-brandGreeen border-gray-300 rounded"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="accept-terms" className="text-gray-700">
            Accept Terms
          </label>
        </div>

        
        <div className="mt-4 flex justify-center space-x-4">
     
        <Link
  to="/vendorform"
  className={`${
    isChecked
      ? "bg-brandGreeen text-white"
      : "bg-gray-400 text-gray-200 cursor-not-allowed"
  } px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brandGreeen focus:ring-opacity-50`}
  onClick={(e) => !isChecked && e.preventDefault()}
>
  Vendor
</Link>

        
<Link
  to="/userform"
  className={`${
    isChecked
      ? "bg-brandGreeen text-white"
      : "bg-gray-400 text-gray-200 cursor-not-allowed"
  } px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brandGreeen focus:ring-opacity-50`}
  onClick={(e) => !isChecked && e.preventDefault()}
>
  User
</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
