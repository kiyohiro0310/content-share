const date = new Date();

// 1. Get the Day of the week and Month names
const dayName = date.toLocaleDateString('en-AU', { weekday: 'long' });
const monthName = date.toLocaleDateString('en-AU', { month: 'long' });
const year = date.getFullYear();
const dayNumber = date.getDate();

// 2. Get the Time (24-hour format)
const time = date.toLocaleTimeString('en-AU', { 
  hour: '2-digit', 
  minute: '2-digit', 
  hour12: false 
});

// 3. Helper function for the suffix (1st, 2nd, 3rd, etc.)
const getOrdinalSuffix = (day: number) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
};

// 3. Combine them
export const dateForComment = `${time} / ${dayName}, ${dayNumber}${getOrdinalSuffix(dayNumber)} ${monthName}, ${year}`;
