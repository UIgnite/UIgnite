import React, { useState, useRef, useEffect } from "react";
import { cn } from "../utils/lib";

function DatePicker({
  className,
  onChange,
  value,
  placeholder = "Select date...",
}) {
  const [open, setOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    value ? new Date(value) : new Date()
  );

  // reference for clicking outside the datepicker
  const calendarRef = useRef(null);
  const inputRef = useRef(null);

  // outside click hone par datepicker band hone k liye
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        open &&
        calendarRef.current &&
        inputRef.current &&
        !calendarRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // function to handle month navigate hone par
  const toPreviousMonth = () => {
    setCurrentMonth((prev) => {
      const date = new Date(prev);
      date.setMonth(date.getMonth() - 1);
      return date;
    });
  };

  const toNextMonth = () => {
    setCurrentMonth((prev) => {
      const date = new Date(prev);
      date.setMonth(date.getMonth() + 1);
      return date;
    });
  };

  // function date select hone par
  const handleDateSelect = (date) => {
    onChange(date);
    setOpen(false);
  };

  // month and year k liye formatted string
  const monthYear = currentMonth.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // days ki list generate karne k liye
  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // function first day of month ka pata karne k liye
  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // function days array generate karne k liye
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);

    const calendarDays = [];

    // Empty slots for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    // Actual days of the month
    for (let day = 1; day <= days; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        value &&
        date.getDate() === value.getDate() &&
        date.getMonth() === value.getMonth() &&
        date.getFullYear() === value.getFullYear();

      // Check if the date is today
      const isToday =
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear();

      calendarDays.push(
        <button
          key={`day-${day}`}
          onClick={() => handleDateSelect(date)}
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full text-sm focus:outline-none",
            isSelected
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : isToday
              ? "border border-blue-200 hover:bg-gray-200"
              : "hover:bg-gray-200"
          )}
          tabIndex={0}
          aria-label={`${date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}`}
          aria-selected={isSelected ? "true" : "false"}
        >
          {day}
        </button>
      );
    }

    return calendarDays;
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <div
        ref={inputRef}
        className="border rounded-md p-2 flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Select date"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen(!open);
            e.preventDefault();
          }
        }}
      >
        <span>{value ? value.toLocaleDateString() : placeholder}</span>
        <svg
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {open && (
        <div
          ref={calendarRef}
          className="absolute mt-1 bg-white border rounded-md shadow-lg p-4 z-10 w-64"
          role="dialog"
          aria-modal="true"
          aria-label="Calendar"
        >
          {/* Month and Year Navigation */}
          <div className="flex justify-between items-center mb-2">
            <button
              type="button"
              onClick={toPreviousMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              aria-label="Previous month"
            >
              &lt;
            </button>
            <div className="text-lg font-semibold">{monthYear}</div>
            <button
              type="button"
              onClick={toNextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
              aria-label="Next month"
            >
              &gt;
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-700"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">{generateCalendarDays()}</div>
        </div>
      )}
    </div>
  );
}

export { DatePicker };
