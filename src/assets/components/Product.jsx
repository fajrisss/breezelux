// import React from 'react'

// bg-[#364f6b] text-[#3fc1c9] bg-[#e5e5e5]
const Product = () => {
  return (
    <div className="min-h-screen bg-[#364f6b] py-20">
      <h1 className="text-xl font-semibold text-center pb-5 text-[#3fc1c9]">
        <span className="font-outline-4 text-transparent text-2xl">BREEZ</span>{" "}
        Simply{" "}
        <span className="bg-[#e5e5e5] text-[#364f6b] px-4 py-0.5 text-2xl">
          LUX
        </span>
      </h1>
      <h1 className="text-center text-3xl mb-20 font-bold text-[#b2b2b2] underline">PRODUCT</h1>
      <div className=" flex flex-col justify-center items-center gap-20 md:flex-row md:px-20 md:flex-wrap">
        <div className="relative w-max">
          <img
            className="rounded-xl p-1 bg-[#b2b2b2]"
            src="https://source.unsplash.com/300x400?tshirt"
            alt="shirt"
          />
          <p className="py-2 px-10 w-max rounded-es-xl rounded-tr-xl absolute bottom-32 right-20 text-xl font-semibold bg-[#3fc1c9]">
            t-shirt
          </p>
          <p className="text-center pt-5 text-xl text-[#3fc1c9] font-semibold">Casual Cool, Everyday Essential</p>
        </div>
        <div className="relative w-max">
          <img
            className="rounded-xl p-1 bg-[#b2b2b2]"
            src="https://source.unsplash.com/300x400?hoodie"
            alt="hodie"
          />
          <p className="py-2 px-10 w-max rounded-es-xl rounded-tr-xl absolute bottom-32 right-20 text-xl font-semibold bg-[#3fc1c9]">
            Hoodie
          </p>
          <p className="text-center pt-5 text-xl text-[#3fc1c9] font-semibold">Cozy Comfort, Stylish Vibes</p>
        </div>
        <div className="relative w-max">
          <img
            className="rounded-xl p-1 bg-[#b2b2b2]"
            src="https://source.unsplash.com/300x400?hijab"
            alt="hijab"
          />
          <p className="py-2 px-10 w-max rounded-es-xl rounded-tr-xl absolute bottom-32 right-20 text-xl font-semibold bg-[#3fc1c9]">
            Hijab
          </p>
          <p className="text-center pt-5 text-xl text-[#3fc1c9] font-semibold">Timeless Elegance, Modest Beauty</p>
        </div>
        <div className="relative w-max">
          <img
            className="rounded-xl p-1 bg-[#b2b2b2]"
            src="https://source.unsplash.com/300x400?jeans"
            alt="jeans"
          />
          <p className="py-2 px-10 w-max rounded-es-xl rounded-tr-xl absolute bottom-32 right-20 text-xl font-semibold bg-[#3fc1c9]">
            jeans
          </p>
          <p className="text-center pt-5 text-xl text-[#3fc1c9] font-semibold">Perfect Fit, Effortless Chic</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
