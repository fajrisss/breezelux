/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import LOGO from "./../BREEZLUX.png";

import { useState } from "react";

const items = [
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: "Our Story",
    desc: "The journey of Breez Simply Lux began with a vision to redefine simplicity in fashion. We noticed a gap in the market for clothing that is both fashionable and easy to wear, without being overly complicated. Inspired by the beauty of minimalist aesthetics, we set out to create a brand that embraces clean lines, neutral tones, and versatile designs.Our team of passionate designers and fashion enthusiasts work tirelessly to curate a thoughtfully crafted collection that transcends seasons and trends. We believe that fashion should be an expression of ones personality, and thats why our clothing exudes understated elegance, allowing you to make a statement without saying a word.",
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: "Our Commitment",
    desc: "At Breez Simply Lux, our commitment goes beyond creating stylish clothing. We strive to make a positive impact on our environment and society. We are proud to say that all our clothing is ethically sourced and produced with sustainable materials, ensuring a conscious and responsible approach to fashion. We value our customers satisfaction above all else. Your happiness is our priority, and we are dedicated to providinMath.floor(Math.random() * 10000) + 1 exceptional customer service that goes beyond your expectations. We believe in building long-lasting relationships with our customers, and we are always here to assist you in any way we can.",
  },
  {
    id: Math.floor(Math.random() * 10000) + 1,
    name: "Join the Breez Simply Lux Community",
    desc: "We invite you to be a part of the Breez Simply Lux community and embark on a journey of timeless style and effortless elegance. Stay updated with the latest trends, style tips, and exclusive offers by joining our newsletter. Follow us on social media to become a part of our growing community and connect with like-minded fashion enthusiasts. Thank you for choosing Breez Simply Lux, where simplicity and style unite to redefine the way you dress. We look forward to being a part of your fashion story and empowering you to embrace your individuality with confidence.",
  },
];

// bg-[#364f6b] text-[#3fc1c9] bg-[#e5e5e5]
const About = () => {
  const [popoopContent, setPopoopContent] = useState(null);
  const [closePopup, setClosePopup] = useState(false);

  const changeContent = (item) => {
    setPopoopContent(item);
    setClosePopup(true);
  };

  // const closePopupHandler = () => {
  //   setClosePopup(false);
  // };
  return (
    <div className="bg-breez-lux bg-fixed bg-cover">
      <div className="min-h-screen flex py-10 gap-7 flex-col justify-center items-center  px-5 md:px-20 md:py-20 md:flex-row md:items-start md:justify-between ">
        <div className="block md:w-3/5 md:flex md:flex-col md:gap-24 md:items-center">
          <div className="bg-[#3fc1c9] p-5 bg-opacity-70 shadow-lg">
            <h1 className="text-xl font-semibold text-center pb-5 text-[#364f6b]">
              About Us -{" "}
              <span className="font-outline-1 text-transparent text-2xl">
                BREEZ
              </span>{" "}
              Simply{" "}
              <span className="bg-[#e5e5e5] text-[#364f6b] px-4 py-0.5 text-2xl">
                LUX
              </span>
            </h1>
            <p className="text-justify text-black">
              Welcome to Breez Simply Lux, where simplicity meets style. We are
              a modern and trendy clothing brand dedicated to providing
              high-quality, comfortable, and effortlessly chic apparel for
              fashion-conscious individuals. At Breez Simply Lux, we believe
              that fashion should be accessible to all, without compromising on
              style. Our mission is to offer a curated collection of timeless
              wardrobe essentials that can effortlessly elevate your everyday
              look. Whether you're dressing up for a special occasion or keeping
              it casual, our clothing is designed to empower you to feel
              confident and embrace your unique style.
            </p>
          </div>
          {/* <div className=" w-1/2 hidden md:block">
            <img src={LOGO} alt="" />
          </div> */}
        </div>
        <div className=" flex flex-col gap-12 md:w-2/3 md:flex-row md:flex-wrap md:justify-end">
          {items.map((item) => (
            <div
              className=" w-72 h-max md:w-52 bg-[#364f6b] text-[#e5e5e5] p-4"
              key={item.id}
            >
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p className="text-justify overflow-hidden h-48 pt-3">
                {item.desc}
              </p>
              <button
                className="py-0.5 px-2 cursor-pointer underline bg-[#b2b2b2] text-[#364f6b] mt-5 "
                type="button"
                onClick={() => changeContent(items)}
              >
                read more
              </button>
            </div>
          ))}
        </div>
        {closePopup && popoopContent && (
          <div
            className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50"
            key={popoopContent.id}
          >
            <div className="border-2 shadow-xl p-3 bg-white w-3/4 h-max relative dark:bg-slate-800 rounded-md dark:border dark:shadow-2xl dark:shadow-slate-950 sm:w-96 flex flex-col items-center sm:p-5">
              <button
                className="py-1 px-2.5 text-sm rounded-full bg-red-600 absolute top-0 right-0 text-white font-black text-center m-auto border flex justify-center items-center border-white dark:border-slate-800 dark:text-slate-100"
                onClick={() => setClosePopup(false)}
              >
                X
              </button>
              <div className="">
                <p className="mb-2">{popoopContent.name}</p>
                <p className="">{popoopContent.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
