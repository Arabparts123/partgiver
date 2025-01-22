"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules" // Corrected import

const HeaderCarousel = () => {
  return (
    <div className='w-full h-[70vh] sm:h-[60vh] xs:h-[50vh]'>
      <Swiper modules={[Navigation]} navigation loop className='h-full'>
        <SwiperSlide>
          <div
            className='flex items-center justify-center h-full bg-cover bg-center'
            style={{
              backgroundImage: "url('/images/auto-slider.jpg')",
            }}
          >
            <h1 className='text-white text-4xl sm:text-3xl xs:text-2xl font-bold'>
              Slide 1 Heading
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex items-center justify-center h-full bg-cover bg-center'
            style={{
              backgroundImage: "url('/images/auto-slider.jpg')",
            }}
          >
            <h1 className='text-white text-4xl sm:text-3xl xs:text-2xl font-bold'>
              Slide 2 Heading
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex items-center justify-center h-full bg-cover bg-center'
            style={{
              backgroundImage: "url('/images/auto-slider.jpg')",
            }}
          >
            <h1 className='text-white text-4xl sm:text-3xl xs:text-2xl font-bold'>
              Slide 3 Heading
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex items-center justify-center h-full bg-cover bg-center'
            style={{
              backgroundImage: "url('/images/auto-slider.jpg')",
            }}
          >
            <h1 className='text-white text-4xl sm:text-3xl xs:text-2xl font-bold'>
              Slide 3 Heading
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='flex items-center justify-center h-full bg-cover bg-center'
            style={{
              backgroundImage: "url('/images/auto-slider.jpg')",
            }}
          >
            <h1 className='text-white text-4xl sm:text-3xl xs:text-2xl font-bold'>
              Slide 4 Heading
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeaderCarousel
