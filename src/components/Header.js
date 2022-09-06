import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {AiOutlinePlusCircle} from 'react-icons/ai'

function Header() {
  return (
    <div>
      
<header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0 mx-10 space-x-6 hover:text-gray-500">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      

        <FiSettings className='text-[#6F7378] text-3xl cursor-pointer hover:text-gray-600'/>
      
        <IoIosNotificationsOutline className='text-[#6F7378] text-4xl cursor-pointer hover:text-gray-600'/>
    </a>
    <div className="md:ml-auto md:mr-auto w-96 h-12 flex flex-wrap flex-row  items-center text-base justify-center bg-[#000000] rounded-3xl relative">
      <div className=' rounded-3xl bg-[#323337] w-24 h-10  '>
        <div className='w-24 mx rounded-3xl bg-[#323337] absolute justify-items-start w'>

          <a className="mr-5 bg-[#323337] ml-auto text-white hover:text-gray-600 cursor-pointer">Timeline</a>
        </div>
      </div>
      <a className="mr-5 text-[#6F7378] bg-[#000000] cursor-pointer">Albumns</a>
      <a className="mr-5 text-[#6F7378] bg-[#000000] cursor-pointer">Events</a>
      <a className="mr-5 text-[#6F7378] bg-[#000000] cursor-pointer">Favourites</a>
    </div>
    <button className="inline-flex items-center w-20 bg-[#2E8BFF] border-none border-0 py-1 px-3 focus:outline-none rounded-3xl text-4xl mt-4 md:mt-0 ">
      {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg> */}


        <AiOutlinePlusCircle className='bg-[#2E8BFF] m-auto'/>
      
      
    </button>
  </div>
</header>
    </div>
  )
}

export default Header
