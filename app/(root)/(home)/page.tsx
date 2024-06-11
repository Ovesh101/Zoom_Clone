import MeetingTypeRoom from '@/components/MeetingTypeRoom';
import React from 'react'

const HomePage = () => {
    const now = new Date();
    
    const formattedTime = now.toLocaleTimeString('en-US',  { hour: 'numeric', minute: 'numeric', hour12: true });

   
    const formattedDate = now.toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    console.log(formattedDate); // Example output: "Saturday, March 24, 2024"


console.log(formattedTime); // Example output: "11:30 AM"

    
    const date = "";
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
     <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
            <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base'>
                Upcoming Meeting at: 12:30 PM
            </h2>
            <div className='flex flex-col gap-2'>
                <h1 className='text-4xl font-extrabold lg:text-7xl'>{formattedTime}</h1>
                <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
                   {formattedDate}
                </p>
            </div>
        </div>


     </div>
     <MeetingTypeRoom />
    </section>
  )
}

export default HomePage