/**
 * Timezone Utilities
 * Provides helper functions for timezone operations
 */

/**
 * Get UTC offset for a timezone
 * @param {string} timezone - Timezone string (e.g., 'Asia/Kolkata')
 * @param {Date} date - Date object
 * @returns {string} - UTC offset (e.g., '+05:30')
 */
export const getUTCOffset = (timezone, date = new Date()) => {
  try {
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timezone }));
    const offset = (utcDate - tzDate) / (1000 * 60 * 60);
    const sign = offset < 0 ? '+' : '-';
    const hours = Math.abs(Math.floor(offset));
    const minutes = Math.abs((offset % 1) * 60);
    return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  } catch (error) {
    return '±00:00';
  }
};

/**
 * Get formatted time in timezone
 * @param {string} timezone - Timezone string
 * @param {Date} date - Date object
 * @returns {object} - { time, date, dayName }
 */
export const getTimeInTimezone = (timezone, date = new Date()) => {
  try {
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: timezone
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: timezone
    });

    return {
      time: timeFormatter.format(date),
      date: dateFormatter.format(date)
    };
  } catch (error) {
    return { time: 'Invalid', date: 'Invalid' };
  }
};

/**
 * Get timezone name
 * @param {string} timezone - Timezone string
 * @param {Date} date - Date object
 * @returns {string} - Timezone name
 */
export const getTimezoneName = (timezone, date = new Date()) => {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'long'
    });
    const parts = formatter.formatToParts(date);
    const tzNamePart = parts.find(part => part.type === 'timeZoneName');
    return tzNamePart ? tzNamePart.value : timezone;
  } catch (error) {
    return timezone;
  }
};

/**
 * Get all supported timezones
 * @returns {array} - Array of timezone strings
 */
export const getAllTimezones = () => {
  return [
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
};

/**
 * Get timezone by region
 * @param {string} region - Region name
 * @returns {array} - Array of timezones
 */
export const getTimezonesByRegion = (region) => {
  const regions = {
    asia: ['UTC', 'Asia/Kolkata', 'Asia/Dubai', 'Asia/Bangkok', 'Asia/Singapore', 'Asia/Hong_Kong', 'Asia/Tokyo', 'Asia/Seoul'],
    americas: ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'America/Anchorage', 'Pacific/Honolulu', 'America/Sao_Paulo', 'America/Buenos_Aires'],
    europe: ['Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Rome', 'Europe/Moscow'],
    africa: ['Africa/Cairo', 'Africa/Johannesburg'],
    pacific: ['Australia/Sydney', 'Australia/Melbourne', 'Pacific/Auckland']
  };
  return regions[region?.toLowerCase()] || [];
};

/**
 * Calculate time difference between two timezones
 * @param {string} tz1 - First timezone
 * @param {string} tz2 - Second timezone
 * @param {Date} date - Date object
 * @returns {object} - { hours, minutes, sign }
 */
export const getTimeDifference = (tz1, tz2, date = new Date()) => {
  try {
    const offset1 = getUTCOffset(tz1, date);
    const offset2 = getUTCOffset(tz2, date);

    const parseOffset = (offsetStr) => {
      const [sign, time] = [offsetStr[0], offsetStr.substring(1)];
      const [hours, minutes] = time.split(':').map(Number);
      const totalMinutes = (sign === '+' ? 1 : -1) * (hours * 60 + minutes);
      return totalMinutes;
    };

    const diff = Math.abs(parseOffset(offset1) - parseOffset(offset2));
    return {
      hours: Math.floor(diff / 60),
      minutes: diff % 60
    };
  } catch (error) {
    return { hours: 0, minutes: 0 };
  }
};
