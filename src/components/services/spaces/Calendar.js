import React, { useState } from "react";
import CalendarTemplate from "availability-calendar-react";

const Calendar = () => {
  const [availability, setAvailability] = useState([]);
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
  });
  return (
    <>
      <Calendar />
    </>
  );
};
export default Calendar;
