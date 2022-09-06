import React from 'react'

function Gallery2() {
  return (
    <div>
      <section className=" body-font flex flex-row " >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-evenly flex-wrap">
          <div className="flex w-24 mb-20 flex-wrap flex-col font-bold text-[#2E8BFF]">
            <h1 className="sm:text-3xl text-2xl font-medium lg:w-1/3 lg:mb-0 mb-4 ">This Week</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-[#6F7378] ">21 to 25 August 2022</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 grid grid-rows-2 justify-end align-bottom">
            <div className="md:grid md:grid-cols-3 grid grid-cols-2 justify-items-center w-full ">
              
              {/* 3 pics  */}
                
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/7.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/8.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/9.jpg" />
              </div>
            </div>
            
            


              <div className='flex flex-row justify-items-center relative'>
                <div className=' md:grid md:grid-cols-3 grid-cols-2 grid justify-items-center '>

                <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/10.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/11.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/12.jpg" />
              </div>
                  

                </div>
            </div>
              
              
            <div className='grid grid-cols-2 justify-items-center grid-wrap'>

              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/13.jpg" />
              </div>
              <div className="md:p-2 p-1 w-full justify-start">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/14.jpg" />
              </div>

            </div>
            
          </div>
        </div>
</section>
    </div>
  )
}

export default Gallery2
