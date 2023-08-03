import LOGO from './../BREEZLUX.png'

// bg-[#364f6b] text-[#3fc1c9] bg-[#e5e5e5]

const Nav = () => {
  return (
    <div className='fixed z-50'>
      <div className="flex items-center w-screen justify-between px-5 md:px-20 py-2 text-[#364f6b] font-semibold bg-[#e5e5e5]">
        <div className="logo">
          <img src={LOGO} alt="" className='w-12'/>
        </div>
        <div className="hidden md:block">
          <a href=""className='hover:text-lg'>Home</a>
          <a href=""className='hover:text-lg px-3'>About</a>
          <a href=""className='hover:text-lg'>Product</a>
        </div>
        <div className="">
          <a href="" className='bg-[#364f6b] text-[#e5e5e5] hover:bg-[#3cf1c9] transition-all hover:text-[#364f6b] rounded-md underline px-3 py-1.5'>SHOP</a>
        </div>
      </div>
    </div>
  )
}

export default Nav