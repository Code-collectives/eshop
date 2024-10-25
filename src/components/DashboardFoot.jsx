import { FaHeart, FaPhoneAlt, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const DashFooter = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-500 w-[84%] float-end ">
      <div className="container mx-auto py-10 px-5">
        <div className="grid md:grid-cols-2 gap-8 text-center  md:text-left">
          
          {/* Company details */}
          <div className="py-4">
            <a href="#" className="text-primary font-semibold  text-2xl uppercase sm:text-3xl">
              ESHOP
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
            Welcome to Eshop, where your gadget dreams come true! We’re not just another boring tech site; we’re the wild, wacky world of electronics
            </p>
            <p className="text-gray-500 mt-4 flex items-center justify-center md:justify-start">
              Made with <FaHeart className="mx-2 text-red-600" /> by The Code collective
            </p>
          </div>

          {/* Important Links */}
          {/* <div className="py-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Important Links</h4>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div> */}

          {/* Links */}
          {/* <div className="py-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Links</h4>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div> */}

          {/* Contact info and social media */}
          <div className="py-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h4>
            <p className="mt-4 text-gray-700">osu close, plot n. 7</p>
            <p className="mt-2 text-gray-700 flex items-center justify-center md:justify-start">
              <FaPhoneAlt className="mr-2" /> +233 240 070 628
            </p>
            {/* <div className="flex mt-4 space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-700 hover:text-primary"><FaInstagram /></a>
              <a href="#" className="text-gray-700 hover:text-primary"><FaFacebookF /></a>
              <a href="#" className="text-gray-700 hover:text-primary"><FaLinkedinIn /></a>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashFooter;
