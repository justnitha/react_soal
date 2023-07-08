import React, { useState, useEffect } from 'react';

const Countdown = ({ quizCompleted, onTimeUpdate }) => {
  const [countdownTime, setCountdownTime] = useState(6000); // Mengatur waktu mundur selama usestate detik
  

  useEffect(() => {
    let timerID;

    if (!quizCompleted) {
      timerID = setInterval(() => {
        setCountdownTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [quizCompleted]);
  
  
  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
        <div className='flex items-center gap-6 justify-center' >
          <div className='text-center text-3xl font-bold'>{`${hours.toString().padStart(1, '0')}`}
            <p className='text-xs font-normal'>JAM</p>
          </div>
          <div className='px-2'>:</div>
          <div className='text-center text-3xl font-bold'>{`${minutes.toString().padStart(1, '0')}`}
            <p className='text-xs font-normal'>MENIT</p>
          </div>
          <div className='px-2'>:</div>
          <div className='text-center text-3xl font-bold'>{`${seconds.toString().padStart(2, '0')}`}
            <p className='text-xs font-normal'>DETIK</p>
          </div>
        </div>
    );
};
    return (
        <div className='lg:w-[40%] sm:w-[50%] md:w-[50%] w-[70%] mx-auto text-center '>
          <h2 className='text-xs'>Sisa waktu</h2>
            <p className='bg-white  py-1 rounded-xl text-black'>
                {countdownTime >= 0 ? formatTime(countdownTime) : '00:00:00'}
            </p>
        </div>
      );
      
  
};

export default Countdown;
