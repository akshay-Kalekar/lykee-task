import { IndianRupee } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const DisplayCard = ({item}) => {
    console.log(item)
  return (
      <div className='flex w-160 h-60 text-lg  bg-gray-200 '>
          <div className='flex-1'>
              <Image
                  className='flex-1'
                  alt='location-image'
                  height={400}
                  width={400}
                  src={"/customize.avif"}
              />
          </div>
          <div className='flex flex-col flex-1 p-4 '>
              <div className='flex flex-col gap-4'>
                  <h1 className='text-lg flex-1/4'>{item["trip-name"]}</h1>
                  <div className='flex flex-wrap gap-2 flex-2/4 text-xs'>
                      <div className='flex items-center gap-2 rounded-2xl bg-pink-100 p-2'>
                          {item.duration}
                      </div>
                      {item.amenities?.map((aminity, index) => (
                          <div
                              key={index}
                              className='flex items-center gap-2 rounded-2xl bg-gray-100 p-2'
                          >
                              <span>{aminity}</span>
                          </div>
                      ))}
                  </div>
                  <div className='flex-1/4 flex items-center italic'><IndianRupee/> {item.price} / person</div>
              </div>
          </div>
      </div>
  );
}

export default DisplayCard