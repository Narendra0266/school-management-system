import React, { useState } from 'react';
import DigitalClock from '../components/DigitalClock';
import AnalogClock from '../components/AnalogClock';
import './ClockDashboard.css';

const ClockDashboard = () => {
  const [viewMode, setViewMode] = useState('digital');

  const analogTimezones = [
    { timezone: 'UTC', label: 'UTC' },
    { timezone: 'Asia/Kolkata', label: 'IST - India' },
    { timezone: 'America/New_York', label: 'EST - New York' },
    { timezone: 'Europe/London', label: 'GMT - London' },
    { timezone: 'Asia/Tokyo', label: 'JST - Tokyo' },
    { timezone: 'Australia/Sydney', label: 'AEDT - Sydney' }
  ];

  return (
    <div className="clock-dashboard">
      <div className="view-toggle">
        <button
          className={`toggle-btn ${viewMode === 'digital' ? 'active' : ''}`}
          onClick={() => setViewMode('digital')}
        >
          📱 Digital View
        </button>
        <button
          className={`toggle-btn ${viewMode === 'analog' ? 'active' : ''}`}
          onClick={() => setViewMode('analog')}
        >
          🕐 Analog View
        </button>
      </div>

      {viewMode === 'digital' ? (
        <DigitalClock />
      ) : (
        <div className="analog-clocks-section">
          <div className="analog-header">
            <h1>🕐 Analog Clocks - Global Time</h1>
            <p>View time across different timezones</p>
          </div>
          <div className="analog-clocks-grid">
            {analogTimezones.map((item) => (
              <div key={item.timezone} className="analog-clock-wrapper">
                <AnalogClock timezone={item.timezone} label={item.label} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClockDashboard;
