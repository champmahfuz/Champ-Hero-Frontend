/* eslint-disable @next/next/no-img-element */
const reviewers = [
  {
    name: "Champ Mahfuz",
    img: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
    role: "Javascript Learner",
    review:
      "Keep on jumping to get the most of the jump rope exercise. It will help you to increase your bone density as well",
  },
  {
    name: "Sumit Saha",
    img: "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
    role: "JavaScript Learner",
    review:
      "I had the opportunity to explore your student demo of the educational website, and I appreciate the effort you've put into creating an educational platform. Here are some observations and suggestions",
  },
  {
    name: "Hasin Haider",
    img: "https://img.freepik.com/free-photo/brunet-man-wearing-round-eyeglasses-beige-shirt_273609-19993.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais",
    role: "Laravel Learner",
    review:
      "The educational content is well-organized and easy to access. The sections and categories make it convenient to navigate through different subjects. The content is engaging and informative, which is a key factor in keeping students interested.",
  },
];

const Reviews = () => {
  return (
    <div>
      <section className="flex items-center bg-white lg:h-screen dark:bg-gray-800">
        <div className="p-4 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h1 className="mb-4 text-3xl font-bold dark:text-white">
              {" "}
              Our Students Feedback{" "}
            </h1>
            <p className="max-w-xl mx-auto text-gray-500">
              Enrolling in courses at Champ Hero was the best decision I ever
              made. The instructors are knowledgeable, and the content is
              top-notch. I havv gained valuable skills that have already helped
              me in my career.
            </p>
          </div>
          <div className="flex ">
            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reviewers.map((review, i) => (
                <div
                  key={i}
                  className="p-10 relative mb-10 rounded-lg border-t-4 border-b-4 border-r-4 border-l-4"
                >
                  <div className="z-20 pt-8 pb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute top-0 left-0 w-20 h-20 opacity-10"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                    <div className="text-center">
                      <div className="relative inline-block w-32 h-32 mb-10 text-xs text-white rounded">
                        <div className="absolute w-24 h-24 border-t-4 border-r-4 border-blue-400 -top-4 -right-4"></div>
                        <img
                          className="object-cover w-full h-full"
                          src={review.img}
                          alt=""
                        />
                        <div className="absolute w-24 h-24 border-b-4 border-l-4 border-blue-400 -bottom-4 -left-4"></div>
                      </div>
                    </div>
                    <p className="mb-4 text-base leading-7 text-gray-400">
                      {review.review}
                    </p>
                    <h2 className="text-lg font-bold leading-9 text-black dark:text-white">
                      {review.name}
                    </h2>
                    <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                      {review.role}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute right-0 w-20 h-20 rotate-180 bottom-4 opacity-10"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
