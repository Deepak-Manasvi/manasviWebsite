import React from 'react'

const Banner = () => {
  return (
    <div className='w-full '>
       <div className="bg-gray-100 font-[sans-serif] relative  mx-auto rounded overflow-hidden mt-4">
      <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 py-10 border-y-8 border-[#0d2666]">
        <div className="text-center px-6">
          <h3 className="font-extrabold text-5xl text-orange-500 leading-tight"><span className="text-gray-800">Manasvi</span> Technologies</h3>
          <h6 className="text-2xl text-gray-800 mt-2">Limited Time Deal</h6>
          <p className="text-gray-800 text-base leading-relaxed mt-4">Discover amazing discounts and deals. Don't miss out on our exclusive offers for a limited time.</p>

          <button type="button" className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
            Let's Talk
          </button>
        </div>

        <div className="bg-gradient-to-tr from-[#05102C] to-[#0d2666] rounded-tl-full rounded-bl-full w-full h-max">
          <div className="p-2">
            <img src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-64 w-64 rounded-full object-cover border-4 border-white" alt="img" />
          </div>
        </div>
        {/* <div className="flex justify-center items-center h-screen bg-gray-100">
      <a
        href="../src/assets/pdf/PITCH DECK CLINIC MANAGEMENT.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Open PDF
      </a>
    </div> */}
      </div>
    </div>
    </div>
  )
}

export default Banner
