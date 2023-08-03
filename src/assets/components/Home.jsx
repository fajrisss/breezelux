// import home from "./../home.jpeg";

// bg-[#364f6b] text-[#3fc1c9] bg-[#e5e5e5]
const Home = () => {
  return (
    <div className="h-[100vh] w-screen bg-[#b2b2b2] flex justify-center items-center">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-20">
          <div className="font-rush">
            <h1 className="text-[#364f6b] text-[40px] md:text-[60px]">
              FASHION,
              <br />{" "}
              <span className="font-outline-2 text-transparent">FADE</span>{" "}
              <span className="bg-[#3fc1c9] text-[#e5e5e5] px-4 py-0.5">
                STYLE
              </span>{" "}
              <br />
              IS ETERNAL .
            </h1>
            <q className="font-sans text-lg">Discover Your Style - Breez simply Lux</q>
            <div className=" flex justify-center items-center mt-4">
              <button className="px-5 py-2 bg-[#3fc1c9] text-[#364f6b]"> BUY NOW -&gt;</button>
            </div>
          </div>
          <div className="relative w-max">
            <img src="https://source.unsplash.com/300x300?t-shirt" alt="home image" className="md:w-[500px]"/>
            <p className="absolute -bottom-5 -right-6 text-[#364f6b] font-outline-3 font-rush text-3xl">#0005</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
