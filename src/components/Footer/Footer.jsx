import React from 'react';
import FooterImg from "../../assets/logo-footer.png";
import subscribe from '../../assets/Frame 11.png'

const Footer = () => {
  return (
    <div className='mt-[-2px] bg-[#060919] flex flex-col items-center justify-center md:text-start text-center'>
      <img src={FooterImg} alt="" />
      <div className='flex flex-col md:flex-row gap-10 md:gap-[200px] items-center my-[100px]  '>
        <div className='space-y-5'>
          <h3 className='font-semibold text-[20px] text-white'>About Us</h3>
          <p className='font-semibold text-[16px] text-[#FFFFFF60] w-[300px]'>We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div  className='space-y-5'>
           <h3 className='font-semibold text-[20px] text-white'>Quick Links</h3>
           <ul className='list-disc font-semibold text-[16px] text-[#FFFFFF60] ml-[35px] space-y-2'>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
        </div>
        <div  className='space-y-5'>
            <h3 className='font-semibold text-[20px] text-white'>Subscribe</h3>
            <p className='font-semibold text-[16px] text-[#FFFFFF60] w-[300px] '>Subscribe to our newsletter for the latest updates.</p>
            <div className='flex'>
            <input type="email" placeholder='Enter your email' className='placeholder:p-[20px] font-semibold text-[16px] h-[42px] bg-white  rounded-bl-2xl  rounded-l-2xl' name="" id="" />
            <button className=' cursor-pointer ml-[-2px]'><img className='h-[42px]' src={subscribe} alt="" /></button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
