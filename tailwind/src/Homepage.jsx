import React, { useEffect, useState } from 'react';
import "./Homepage.css"


function Homepage() {
  const [width,setWidth]=useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  },[])
  return (
    <>
    <div className='bg-red-400 flex justify-between h-20 ...'>
 {
width>450?
 <div className="flex justify-start... flex justify-evenly ...  justify-center ... flex items-center w-1/2">
  <div>

  <p className="text-lg ... text-white ... font-semibold">Kalvium</p>
  </div>
  <div>

  <p className=" text-gray-500">About us</p>
  </div>
  <div>

  <p className=" text-gray-500">Contacts</p>
  </div>
  <div>

  <p className=" text-gray-500">courses</p>
  </div>
 </div>
 :
 <div className="flex justify-start... flex justify-evenly ...  justify-center ... flex items-center w-4/5">
 <div>

 <p className="text-lg ... text-white ... font-semibold">Kalvium</p>
 </div>
 <div>

 <p className=" text-gray-500">About us</p>
 </div>
 <div>

 <p className=" text-gray-500">Contacts</p>
 </div>
 <div>

 <p className=" text-gray-500">courses</p>
 </div>
</div>
 }

 <div className="flex flex-row-reverse ... justify-center ... flex items-center ... ">
 <button className=" border-solid border-2 border-white-500 text-white font-bold py-2 px-4 rounded">
  Login
</button>
</div>
    </div>
  <div className='justify-center ... flex items-center ... w-1/1 mt-5 '>
    <div className='w-4/5'>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button one
</button>
<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-1/1 mt-5" role="alert">
  <strong className="font-bold">Alert !</strong>
  <span className="block sm:inline"> This is awesome</span>
 
</div>

<div className='justify-center ... flex items-center ... mt-10'>
  <div>

<img className='w-4/5' src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />  
  </div>
  <div>

 <h1 className='text-lg ... font-semibold'>Kalvium store</h1>
 <p>You have a new course</p>
  </div>
</div>

    </div>
  </div>
  <div className='p-3'>
  <div class="bg-gray-200 container mx-auto mt-10 justify-center ... flex items-center ... h-10 ">
  &#169; 2024 copyright Kalvium
</div>

  </div>
  </>
  );
}

export default Homepage;
