// import React from 'react'
import {
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";

// bg-[#364f6b] text-[#3fc1c9] bg-[#e5e5e5]
const Footer = () => {
  return (
    <footer className="bg-[#3fc1c9]">
      <div className="bg-[#3fc1c9] text-[#364f6b] font-semibold py-5 px-5 ">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:px-20">
          <div className="text-center lg:text-left">
            <p>you need this:</p>
            <ul>
              <li className="cursor-pointer underline hover:text-lg">
                <a href="#">home</a>
              </li>
              <li className="cursor-pointer underline hover:text-lg">
                <a href="#about">about</a>
              </li>
              <li className="cursor-pointer underline hover:text-lg">
                <a href="#Product">home</a>
              </li>
            </ul>
          </div>
          <div className="sosmed text-2xl flex gap-5">
            <SiFacebook />
            <SiTiktok />
            <SiInstagram />
          </div>
          <div className="text-center lg:w-1/6 lg:text-right">
            <p>Our Store:</p>
            <p>jl. jadi apa no:30 Malang, Indonesia</p>
          </div>
        </div>
      </div>
      <p className="w-full text-center">© 2023 Breez Simply Lux. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
