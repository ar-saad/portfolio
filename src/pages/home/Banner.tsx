const Banner = () => {
  return (
    <div className="h-[calc(100vh-52px)] flex justify-center items-center relative">
      {/* Glow background */}
      {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-500 blur-[120px] opacity-40 -z-10" /> */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-[130px] opacity-30 -z-10" />

      <div className="max-w-[600px]">
        <h1 className="text-4xl font-medium flex justify-center mb-2 title-font">
          Hello, I am Saad👋
        </h1>

        <h1 className="text-5xl font-medium title-font text-center">
          Full-stack Developer (MERN) <br /> Clean UI/UX Enthusiast
          <br /> Junior Software Developer
        </h1>
      </div>
    </div>
  );
};

export default Banner;
