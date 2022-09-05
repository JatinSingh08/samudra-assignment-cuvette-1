import React from 'react'

function Gallery() {
  return (
    <div>
      <section className="text-[#2E8BFF] body-font flex flex-row " >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center grid-cols-3">
          <div className="flex w-24 mb-20 flex-wrap flex-col font-bold">
            <h1 className="sm:text-3xl text-2xl font-medium lg:w-1/3 lg:mb-0 mb-4">Today</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base ">Friday, 22 August 2022</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-row">
            <div className="flex w-1/2 flex-col">
              <div className='flex flex-row'>
              {/* 3 pics  */}
                <div className="md:p-2 p-1 w-1/2 ">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl md:w-40" src="/images/photos/1.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl md:w-40 md:h-28 mt-0 mb-0" src="/images/photos/2.jpg" />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl md:w-40 md:h-44" src="/images/photos/3.jpg" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className='flex flex-row'>


                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src="/images/photos/4.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/5.jpg" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/6.jpg" />
                </div>
              </div>
              {/* <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/7.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/8.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/9.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/10.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/11.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/12.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/13.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block rounded-xl" src="/images/photos/14.jpg" />
              </div> */}
            </div>
          </div>
        </div>
</section>
    </div>
  )
}

export default Gallery
