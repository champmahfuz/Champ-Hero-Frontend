// /* eslint-disable @next/next/no-img-element */
// const About = () => {
//   return (
//     <div>
//       <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
//         <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
//           <div className="flex flex-wrap ">
//             <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
//               <div className="relative lg:max-w-md">
//                 <img
//                   src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?w=826&t=st=1697650153~exp=1697650753~hmac=503a3da9cd3860638e8fbf8b56f039b6a142762c365d1072f2e150cb60f2964d"
//                   alt="aboutimage"
//                   className="relative z-10 object-cover w-full rounded h-96"
//                 />
//                 <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
//                   <p className="text-lg font-semibold md:w-72">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
//                     </svg>{" "}
//                     Successfully Providing best courses
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
//               <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
//                 <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
//                   Who we are?
//                 </span>
//                 <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
//                   About Us
//                 </h1>
//               </div>
//               <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
//                 We are committed to excellence in education and strive to create
//                 an inclusive and supportive learning environment. Our team of
//                 experienced educators and experts is passionate about sharing
//                 knowledge and helping you succeed. We offer a wide range of
//                 courses, resources, and tools to meet your educational needs. We
//                 offer a diverse range of courses spanning various subjects and
//                 levels, ensuring that theres something for everyone. Learn from
//                 knowledgeable and dedicated instructors who are experts in their
//                 fields. Engage with our interactive learning materials,
//                 including videos, quizzes, and assignments.
//               </p>
//               <a
//                 href="#"
//                 className="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600"
//               >
//                 Explore more
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from "react";
import about from "public/About.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto py-24 px-6" id="about">
      <h1 className="mb-8 text-3xl font-bold dark:text-white text-center">
        About Us{" "}
      </h1>
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <Image src={about} alt="about" />
          {/* <img src={about} alt="" className="p-4" /> */}
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </div>
          <p className="text-base text-gray leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold hover:bg-sky-500">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
