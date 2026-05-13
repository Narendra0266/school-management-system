import React, { useState, useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock = ({ timezone = 'UTC', label = 'UTC' }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeInTimezone = () => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone
      });
      const parts = formatter.formatToParts(time);
      const timeObj = {};
      parts.forEach(({ type, value }) => {
        if (type !== 'literal') {
          timeObj[type] = parseInt(value);
        }
      });
      return timeObj;
    } catch (error) {
      return { hour: 0, minute: 0, second: 0 };
    }
  };

  const timeObj = getTimeInTimezone();
  const seconds = timeObj.second || 0;
  const minutes = timeObj.minute || 0;
  const hours = (timeObj.hour || 0) % 12;

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="analog-clock-container">
      <h3>{label}</h3>
      <div className="analog-clock">
        <div className="clock-face">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="hour-marker" style={{
              transform: `rotate(${i * 30}deg) translateY(-85px)`
            }}>
              <div style={{ transform: `rotate(-${i * 30}deg)` }}>
                {i === 0 ? 12 : i}
              </div>
            </div>
          ))}

          {/* Hour hand */}
          <div className="hand hour-hand" style={{
            transform: `rotate(${hourDegrees}deg)`
          }}></div>

          {/* Minute hand */}
          <div className="hand minute-hand" style={{
            transform: `rotate(${minuteDegrees}deg)`
          }}></div>

          {/* Second hand */}
          <div className="hand second-hand" style={{
            transform: `rotate(${secondDegrees}deg)`
          }}></div>

          {/* Center dot */}
          <div className="center-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
