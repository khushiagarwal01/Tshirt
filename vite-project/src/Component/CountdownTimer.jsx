import React, { useState, useEffect } from "react";
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      {Object.keys(timeLeft).length === 0 ? (
        <p className="countdown-end">Sale Started!</p>
      ) : (
        <div className="countdown-box">
          <div><span>{timeLeft.days}</span><p>DAYS</p></div>
          <div><span>{timeLeft.hours}</span><p>HOURS</p></div>
          <div><span>{timeLeft.minutes}</span><p>MINS</p></div>
          <div><span>{timeLeft.seconds}</span><p>SECS</p></div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
