import React from 'react';
import { GoCopy } from 'react-icons/go';
import './content.css';

export default function content() {
  return (
    <div className='text-center relative'>
      <p class="text-sm text-primary-400 font-def">
        This extension helps you record <br /> and share help videos with ease.
      </p>
      <div class='flex justify-center items-center mt-10'>
        <div class="grid grid-cols-1 place-items-center mr-8 font-def font-semibold cursor-pointer text-primary-100">
         <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-10 h-10'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
          />
        </svg>
        <p>Full Screen</p>   
        </div>
        
        <div class="grid grid-cols-1 place-items-center text-primary-300 font-def font-semibold cursor-pointer">
          <GoCopy size={35} />  
          <p>Current Tab</p>
        </div>
        
      </div>
      <div class='flex justify-center items-center mt-10'>
        <div class='w-64 border-2 border-primary-300 rounded-lg h-12 flex justify-between items-center'>
          <div class='flex ml-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6 mr-2'
            >
              <path
                stroke-linecap='round'
                d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
            <p>Camera</p>
          </div>
          <label for='toggleB' class='flex items-center cursor-pointer'>
            <div class='relative '>
              <input type='checkbox' id='toggleB' class='sr-only' />
              <div class='block mr-2 bg-primary-300 w-11 h-6 rounded-full'></div>
              <div class='dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition'></div>
            </div>
          </label>
        </div>
      </div>
      <div class='flex justify-center items-center mt-10 '>
        <div class='w-64 border-2 border-primary-300  rounded-lg h-12 flex justify-between items-center'>
          <div class='flex ml-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6 mr-2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
              />
            </svg>
            <p>Audio</p>
          </div>
          <label for='toggleC' class='flex items-center cursor-pointer'>
            <div class='relative'>
              <input type='checkbox' id='toggleC' class='sr-only' />
              <div class='block mr-2 bg-primary-300 w-11 h-6 rounded-full'></div>
              <div class='dot1 absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition'></div>
            </div>
          </label>
        </div>
      </div>
      <button class='bg-primary-300 mt-10 text-white w-64 h-12 rounded-lg'>
        Start Recording
      </button>
    </div>
  );
}
