import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [selectedTimezones, setSelectedTimezones] = useState([
    'UTC',
    'Asia/Kolkata',
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney'
  ]);
  const [allTimezones, setAllTimezones] = useState([]);

  // Get all available timezones
  useEffect(() => {
    const timezones = Intl.DateTimeFormat.supportedLocalesOf('en-US');
    const tzList = [
      'UTC',
      'Asia/Kolkata',
      'Asia/Dubai',
      'Asia/Bangkok',
      'Asia/Singapore',
      'Asia/Hong_Kong',
      'Asia/Tokyo',
      'Asia/Seoul',
      'Australia/Sydney',
      'Australia/Melbourne',
      'Pacific/Auckland',
      'America/New_York',
      'America/Chicago',
      'America/Denver',
      'America/Los_Angeles',
      'America/Anchorage',
      'Pacific/Honolulu',
      'Europe/London',
      'Europe/Paris',
      'Europe/Berlin',
      'Europe/Rome',
      'Europe/Moscow',
      'Africa/Cairo',
      'Africa/Johannesburg',
      'America/Sao_Paulo',
      'America/Buenos_Aires'
    ];
    setAllTimezones(tzList);
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeInTimezone = (timezone) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: timezone
      }).format(time);
    } catch (error) {
      return 'Invalid TZ';
    }
  };

  const getDateInTimezone = (timezone) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: timezone
      }).format(time);
    } catch (error) {
      return '';
    }
  };

  const addTimezone = (timezone) => {
    if (!selectedTimezones.includes(timezone)) {
      setSelectedTimezones([...selectedTimezones, timezone]);
    }
  };

  const removeTimezone = (timezone) => {
    setSelectedTimezones(selectedTimezones.filter(tz => tz !== timezone));
  };

  const getTimezoneName = (timezone) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        timeZoneName: 'long'
      });
      const parts = formatter.formatToParts(time);
      const tzNamePart = parts.find(part => part.type === 'timeZoneName');
      return tzNamePart ? tzNamePart.value : timezone;
    } catch (error) {
      return timezone;
    }
  };

  const getUTCOffset = (timezone) => {
    try {
      const utcDate = new Date(time.toLocaleString('en-US', { timeZone: 'UTC' }));
      const tzDate = new Date(time.toLocaleString('en-US', { timeZone: timezone }));
      const offset = (utcDate - tzDate) / (1000 * 60 * 60);
      const sign = offset < 0 ? '+' : '-';
      const hours = Math.abs(Math.floor(offset));
      const minutes = Math.abs((offset % 1) * 60);
      return `UTC${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    } catch (error) {
      return 'UTC';
    }
  };

  return (
    <div className="digital-clock-container">
      <div className="clock-header">
        <h1>🕐 Global Digital Clock</h1>
        <p>Current time in different timezones</p>
      </div>

      {/* Add Timezone Section */}
      <div className="add-timezone-section">
        <label htmlFor="timezone-select">Add Timezone:</label>
        <select
          id="timezone-select"
          onChange={(e) => {
            if (e.target.value) {
              addTimezone(e.target.value);
              e.target.value = '';
            }
          }}
          className="timezone-select"
        >
          <option value="">Select a timezone...</option>
          {allTimezones.map((tz) => (
            <option key={tz} value={tz} disabled={selectedTimezones.includes(tz)}>
              {tz}
            </option>
          ))}
        </select>
      </div>

      {/* Clock Grid */}
      <div className="clocks-grid">
        {selectedTimezones.map((timezone) => (
          <div key={timezone} className="clock-card">
            <div className="clock-card-header">
              <div>
                <h2 className="timezone-label">{timezone}</h2>
                <p className="timezone-name">{getTimezoneName(timezone)}</p>
                <p className="utc-offset">{getUTCOffset(timezone)}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeTimezone(timezone)}
                title="Remove timezone"
              >
                ✕
              </button>
            </div>

            <div className="clock-display">
              <div className="digital-time">{getTimeInTimezone(timezone)}</div>
            </div>

            <div className="clock-date">
              {getDateInTimezone(timezone)}
            </div>
          </div>
        ))}
      </div>

      {/* Server Time Info */}
      <div className="server-info">
        <h3>Server Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Local Time:</span>
            <span className="info-value">{time.toLocaleTimeString()}</span>
          </div>
          <div className="info-item">
            <span className="info-label">UTC Time:</span>
            <span className="info-value">{time.toUTCString().split(' ').slice(4, 5)[0]}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Timestamp:</span>
            <span className="info-value">{time.getTime()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
