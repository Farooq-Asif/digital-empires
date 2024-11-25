import React from 'react'

const Slider = () => {
  return (
    <div>
          <div class="w-full relative">
              <div class="swiper multiple-slide-carousel swiper-container relative">
                  <div class="swiper-wrapper mb-16">
                      <div class="swiper-slide">
                          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                              <span class="text-2xl font-semibold text-indigo-600">Slide 1 </span>
                          </div>
                      </div>
                      <div class="swiper-slide">
                          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                              <span class="text-2xl font-semibold text-indigo-600">Slide 2 </span>
                          </div>
                      </div>
                      <div class="swiper-slide">
                          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                              <span class="text-2xl font-semibold text-indigo-600">Slide 3 </span>
                          </div>
                      </div>
                      <div class="swiper-slide">
                          <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                              <span class="text-2xl font-semibold text-indigo-600">Slide 4 </span>
                          </div>
                      </div>
                  </div>
                  <div class="absolute flex justify-center items-center m-auto left-0 right-0 w-fit bottom-12">
                      <button id="slider-button-left" class="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full  hover:bg-indigo-600 !-translate-x-16" data-carousel-prev>
                          <svg class="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </button>
                      <button id="slider-button-right" class="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 !translate-x-16" data-carousel-next>
                          <svg class="h-5 w-5 text-indigo-600 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M5.99984 4.00012L10 8.00029L5.99748 12.0028" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </button>
                  </div>
              </div>
</div>
    </div>
  )
}

export default Slider