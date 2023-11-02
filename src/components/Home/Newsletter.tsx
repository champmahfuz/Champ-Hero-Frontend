"use client";
// const Newsletter = () => {
//   return (
//     <section className="flex items-center mb-12 bg-gray-100 font-poppins dark:bg-gray-800 ">
//       <div className="justify-center flex-1 px-6 py-16 mx-auto shadow bg-gray-50 dark:bg-gray-900 lg:py-16 md:px-7">
//         <div className="max-w-xl mx-auto text-center">
//           <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-gray-300 md:text-4xl">
//             Sign up for our newsletter
//           </h2>
//           <p className="mb-8 text-base font-medium text-gray-500 md:text-lg dark:text-gray-400">
//             Stay in the loop with everything you need to know. Feel free to sign
//             up with your email.
//           </p>
//           <div className="flex flex-wrap pb-1">
//             <div className="w-full mb-3 md:flex-1 md:mb-0 md:mr-4">
//               <input
//                 className="w-full px-4 py-3 leading-tight text-gray-500 placeholder-gray-500 border border-gray-200 rounded-md shadow-sm dark:border-gray-900 dark:bg-gray-800 dark:text-gray-400"
//                 type="text"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div className="w-full md:w-auto">
//               <a
//                 className="inline-block w-full px-4 py-3 font-medium leading-5 text-center text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 "
//                 href="#"
//               >
//                 Subscribe
//               </a>
//             </div>
//           </div>
//           <p className="text-sm leading-loose text-center text-gray-500 dark:text-gray-400 lg:text-left lg:max-w-lg">
//             We protect your data with care. Read our{" "}
//             <a
//               href="#"
//               className="text-blue-500 underline dark:text-blue-400 dark:hover:text-blue-500 hover:text-blue-700 "
//             >
//               Privacy Policy
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;

import React from "react";
import { motion } from "framer-motion";
const Newsletter = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </div>
        <p className="text-base leading-7 text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
          minus doloribus voluptatem illo velit quia eum aperiam! Repudiandae,
          tempore. Lorem ipsum dolor sit amet.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-base shadow-md sm:w-72 w-60 rounded"
          />
          <button className="text-md text-black bg-sky-500 sm:p-3 p-2 shadow-md font-bold rounded">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Newsletter;
