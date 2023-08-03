// import React from 'react'
import {
  SiShopee,
  SiAmazon,
  SiEbay,
  SiShopify,
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";

// bg-[#364f6b] text-[#3fc1c9] bg-[#e5e5e5]
const Catalog = () => {
  return (
    <div className="bg-[#364f6b] py-20">
      <div className="">
        <h1 className="text-3xl text-center text-[#3fc1c9] font-bold mb-10">
          CATALOG
        </h1>
        <div className="flex flex-col gap-8 md:flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center gap-7 md:w-1/2">
            <p className="text-lg text-slate-400">
              you can find all of our product here:
            </p>
            <div className="">
              <ul className="text-3xl flex gap-5 text-[#364f6b]">
                <li className="p-5 rounded-md bg-[#3fc1c9]">
                  <SiShopee />
                </li>
                <li className="p-5 rounded-md bg-[#3fc1c9]">
                  <SiAmazon />
                </li>
                <li className="p-5 rounded-md bg-[#3fc1c9]">
                  <SiEbay />
                </li>
                <li className="p-5 rounded-md bg-[#3fc1c9]">
                  <SiShopify />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center md:w-1/2">
            <h4 className="text-lg text-slate-400">
              or you can visit our media social:
            </h4>
            <div className=" flex gap-5 text-3xl text-[#364f6b]">
              <a
                className="p-5 rounded-md bg-[#3fc1c9]"
                href="https://facbook.com"
                target="blank"
              >
                <SiFacebook />
              </a>

              <a
                className="p-5 rounded-md bg-[#3fc1c9]"
                href="https://instagram.com"
                target="blank"
              >
                <SiInstagram />
              </a>

              <a
                className="p-5 rounded-md bg-[#3fc1c9]"
                href="https://tiktok.com"
                target="blank"
              >
                <SiTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-col justify-center items-center">
        <h4 className="text-2xl text-center text-[#3fc1c9] font-bold ">Get In Touch</h4>
        <p className="pt-5 pb-10 text-center text-[#b2b2b2]">Get update from our product <br />pssttt! we probably send our discount code too!!</p>
        <div className="">
          <input type="email" className="bg-transparent border border-[#3fc1c9] text-[#3fc1c9] py-1 px-3 rounded-s-full" placeholder="Type your email here .."/>
          <button type="submit" className="py-1 px-3 bg-[#3fc1c9] border border-[#3fc1c9] rounded-e-full">send</button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
