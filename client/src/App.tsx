import { useState, useEffect } from 'react';
import { format, startOfYear, addMonths, getDaysInMonth, endOfMonth, startOfWeek, isEqual, getWeek, isWeekend, isToday } from 'date-fns';
import './App.css'

interface Holiday {
  date: string;
  name: string;
  nationalHoliday: boolean;
}

function App() {
  const [period, setPeriod] = useState<Date>(startOfYear(new Date()));
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  const months = Array.from({ length: 6 }, (_, i) => addMonths(period, i));

  useEffect(() => {
    const start = format(period, 'yyyy-MM-dd');
    const end = format(endOfMonth(addMonths(period, 5)), 'yyyy-MM-dd');

    async function fetchHolidays() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/holidays?startDate=${start}&endDate=${end}`
        );
        const data = await response.json();
        setHolidays(data.data);
      } catch (error) {
        console.error('Failed to fetch holidays:', error);
      }
    }
    fetchHolidays();
  }, [period]);

  const navigate = (direction: 'previous' | 'next') => {
    setPeriod(prev => addMonths(prev, direction === 'next' ? 6 : -6));
  };

  return (
    <div className='main'>
      <table className='calendar'>
        <thead>
          <tr>
            {months.map((month) => (
              <th key={month.toString()}>{format(month, 'MMMM yyyy')}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 31 }).map((_, index) => (
            <tr key={index}>
              {months.map((month) => {
                const day = index + 1;
                const date = new Date(month.getFullYear(), month.getMonth(), day);
                const weekNumber = isEqual(startOfWeek(date, { weekStartsOn: 1 }), date);
                const holiday = holidays.find((h) => h.date === format(date, 'yyyy-MM-dd'));

                return day <= getDaysInMonth(month) ? (
                  <td
                    key={month.toString() + day}
                    className={`day-cell ${isToday(date) ? 'today' : ''} ${holiday?.nationalHoliday ? 'national-holiday' : (holiday ? 'holiday' : (isWeekend(date) ? 'weekend' : ''))}`}>
                    
                    <span className='weekday'>{format(date, 'eee').slice(0, 1)}</span>
                    <span className='day'>{format(date, 'd')}</span>
                    
                    {weekNumber && (
                      <span className='week-number'>{`${getWeek(date, { weekStartsOn: 1 })}`}</span>
                    )}

                    {holiday && (
                      <span className='holiday-name'>{holiday.name}</span>
                    )}
                  </td>
                ) : (
                  <td key={month.toString() + day}></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='navigation'>
        <button onClick={() => navigate('previous')}>← Previous</button>
        <button onClick={() => navigate('next')}>Next →</button>
      </div>
    </div>
    
  );
}

export default App;