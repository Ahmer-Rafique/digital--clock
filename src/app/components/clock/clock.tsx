"use client"
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Pass an empty dependency array to run the effect only once on mount

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const formattedDate = currentTime.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayOfWeek = currentTime.toLocaleDateString(undefined, {
    weekday: 'long',
  });
  return <div>
   
<div className='text-xl  '>  {dayOfWeek} {} 
    {formattedDate}
</div>
  <div> {formattedTime}</div>
  </div>;
};

export default Clock;

