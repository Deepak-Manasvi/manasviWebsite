import React from 'react'

const HeroSeHome = () => {
  return (
    <div className='w-full h-full'>
          <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h3 className="text-gray-800 md:text-3xl text-2xl md:leading-10">Prompt Delivery and Enjoyable Dining Experience.</h3>
        <p className="mt-4 text-sm text-gray-600">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
        <button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
      </div>
      <div className="md:h-[470px]">
        <img src="https://images.unsplash.com/photo-1641984790242-d8aa477d306c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full md:object-contain" />
      </div>
    </div>
    </div>
  )
}

export default HeroSeHome
