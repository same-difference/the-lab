const week_1 = {
    "sun": 1,
    "mon": 2,
    "tues": 3,
    "wed": 4,
    "thurs": 5,
    "fri": 6,
    "sat": 7
};

export default function Calendar() {
    return(
        <div  className='flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12 mb-10'>
        
          <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Sun </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 11 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Mon </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 12 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all font-normal group-hover:font-semibold	duration-300'> Tue </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 13</p>
                  </div>
              </div>
          </div>
        
          <div className='flex group bg-purple-600 shadow-lg dark-shadow rounded-full mx-1 cursor-pointer justify-center relative  w-16'>
            <span className="flex h-2 w-2 absolute bottom-1.5 ">
              <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
              <span className="relative inline-flex rounded-full h- w-3 bg-purple-100"></span>
            </span>
              <div className='flex items-center px-4 my-2 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-100 text-sm font-semibold'> Wed </p>
                     <p className='text-gray-100  mt-3 font-bold'> 14 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Thu </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 15 </p>
                  </div>
              </div>
          </div>
        
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Fri </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 16 </p>
                  </div>
              </div>
          </div>
          
        <div className='flex group hover:bg-purple-500 hover:shadow-lg hover-dark-shadow rounded-full mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'>
              <div className='flex items-center px-4 py-4'>
                  <div className='text-center'>
                     <p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all  group-hover:font-semibold duration-300'> Sat </p>
                     <p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'> 17 </p>
                  </div>
              </div>
          </div>
          
        
      </div>
    )
}