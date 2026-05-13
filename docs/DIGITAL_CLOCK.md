# Digital Clock Feature

## Overview

A comprehensive global digital clock system that displays current time in multiple timezones with both digital and analog clock views.

## Features

### 1. Digital Clock Display
- Real-time updates (every second)
- Display time in multiple timezones simultaneously
- Show timezone name and UTC offset
- Display full date with day of week
- Add/remove timezones dynamically
- Responsive grid layout

### 2. Analog Clock Display
- Traditional analog clock representation
- Hour, minute, and second hands
- Smooth hand movements
- Multiple timezone clocks
- Interactive and visually appealing

### 3. Timezone Support
- 26+ different timezones
- Support for daylight saving time
- UTC offset calculation
- Timezone name display
- Easy timezone selection

## Components

### DigitalClock Component
```jsx
import DigitalClock from './components/DigitalClock';

<DigitalClock />
```

**Features:**
- Real-time clock display
- Add/remove timezone functionality
- Full date and time information
- Server information display

### AnalogClock Component
```jsx
import AnalogClock from './components/AnalogClock';

<AnalogClock timezone="Asia/Kolkata" label="IST - India" />
```

**Props:**
- `timezone` (string) - IANA timezone string
- `label` (string) - Display label for the clock

### ClockDashboard Page
```jsx
import ClockDashboard from './pages/ClockDashboard';

<ClockDashboard />
```

**Features:**
- Toggle between digital and analog views
- Multiple analog clocks in grid
- Responsive design

## Timezone Utilities

The `timezoneUtils.js` provides helper functions:

### getUTCOffset(timezone, date)
Calculates UTC offset for a timezone.
```javascript
getUTCOffset('Asia/Kolkata') // '+05:30'
```

### getTimeInTimezone(timezone, date)
Gets formatted time in a specific timezone.
```javascript
getTimeInTimezone('America/New_York')
// { time: '10:30:45 AM', date: 'Tuesday, May 13, 2026' }
```

### getTimezoneName(timezone, date)
Gets the long name of a timezone.
```javascript
getTimezoneName('Asia/Kolkata') // 'India Standard Time'
```

### getAllTimezones()
Returns array of all supported timezones.
```javascript
getAllTimezones()
// ['UTC', 'Asia/Kolkata', 'Asia/Tokyo', ...]
```

### getTimezonesByRegion(region)
Filters timezones by region.
```javascript
getTimezonesByRegion('asia')
// ['UTC', 'Asia/Kolkata', 'Asia/Tokyo', ...]
```

### getTimeDifference(tz1, tz2, date)
Calculates time difference between two timezones.
```javascript
getTimeDifference('UTC', 'Asia/Kolkata')
// { hours: 5, minutes: 30 }
```

## Supported Timezones

### Asia
- UTC
- Asia/Kolkata (IST)
- Asia/Dubai (GST)
- Asia/Bangkok (ICT)
- Asia/Singapore (SGT)
- Asia/Hong_Kong (HKT)
- Asia/Tokyo (JST)
- Asia/Seoul (KST)

### Americas
- America/New_York (EST/EDT)
- America/Chicago (CST/CDT)
- America/Denver (MST/MDT)
- America/Los_Angeles (PST/PDT)
- America/Anchorage (AKST/AKDT)
- Pacific/Honolulu (HST)
- America/Sao_Paulo (BRT)
- America/Buenos_Aires (ART)

### Europe
- Europe/London (GMT/BST)
- Europe/Paris (CET/CEST)
- Europe/Berlin (CET/CEST)
- Europe/Rome (CET/CEST)
- Europe/Moscow (MSK)

### Africa
- Africa/Cairo (EET)
- Africa/Johannesburg (SAST)

### Pacific
- Australia/Sydney (AEDT/AEST)
- Australia/Melbourne (AEDT/AEST)
- Pacific/Auckland (NZDT/NZST)

## Usage Examples

### Basic Digital Clock
```jsx
import DigitalClock from './components/DigitalClock';

function App() {
  return <DigitalClock />;
}
```

### Multiple Analog Clocks
```jsx
import AnalogClock from './components/AnalogClock';

function TimeDisplay() {
  return (
    <div>
      <AnalogClock timezone="UTC" label="UTC" />
      <AnalogClock timezone="Asia/Kolkata" label="IST" />
      <AnalogClock timezone="America/New_York" label="EST" />
    </div>
  );
}
```

### Using Timezone Utilities
```jsx
import { getTimeInTimezone, getUTCOffset } from './utils/timezoneUtils';

const tzTime = getTimeInTimezone('Asia/Tokyo');
const offset = getUTCOffset('Europe/London');
```

## Styling

### Color Scheme
- Primary: #667eea (Purple Blue)
- Secondary: #764ba2 (Dark Purple)
- Accent: #fbbf24 (Amber)
- Text: #1e3a8a (Dark Blue)

### Responsive Breakpoints
- Desktop: Grid with auto-fit columns
- Tablet (768px): Adjusted grid
- Mobile (480px): Single column layout

## Performance Considerations

1. **Update Interval**: Clock updates every second using `setInterval`
2. **Cleanup**: Timers are properly cleaned up in `useEffect` cleanup
3. **Timezone Calculations**: Using native `Intl.DateTimeFormat` API
4. **No External Libraries**: Pure JavaScript timezone handling

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- IE 11: Limited support (basic functionality)

## Future Enhancements

1. Add alarm/timer functionality
2. Implement stopwatch
3. Add world map with timezone highlighting
4. Create customizable clock themes
5. Add timezone search/filter
6. Implement auto-detection of local timezone
7. Add timezone comparison tool
8. Create timezone conversion calculator

## Integration with School Management System

The digital clock can be integrated into the school management system dashboard to:

1. Display class start/end times across different branches
2. Show transport schedule times in different timezones
3. Display hostel visiting hours in local times
4. Show fee payment deadlines across regions
5. Coordinate meetings between different school locations

## Testing

### Manual Testing Checklist
- [ ] Clock updates every second
- [ ] Add timezone works correctly
- [ ] Remove timezone removes the clock
- [ ] UTC offset is calculated correctly
- [ ] Date displays correctly for different timezones
- [ ] Analog clock hands move smoothly
- [ ] Responsive design works on all screen sizes
- [ ] Toggle between digital and analog views

## Troubleshooting

### Clock not updating
- Check if browser tab is in focus
- Clear browser cache
- Check console for errors

### Wrong timezone display
- Verify timezone string format (e.g., 'Asia/Kolkata')
- Check system timezone settings
- Ensure browser supports `Intl.DateTimeFormat`

### Performance issues
- Limit number of active clocks
- Check for memory leaks in browser dev tools
- Close unnecessary browser tabs
