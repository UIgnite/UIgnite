import React, { useState, useRef, useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../utils/lib";

function DatePicker({
  className,
  onChange,
  value,
  placeholder = "Select date...",
  darkMode = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(
    value ? new Date(value) : new Date(),
  );
  const [showYears, setShowYears] = useState(false);

  // Reference if outside clicks
  const calendarRef = useRef(null);
  const inputRef = useRef(null);

  // clicks outside the datepicker to close it
  useEffect(() => {
    function closeOnOutsideClick(e) {
      if (
        isOpen &&
        calendarRef.current &&
        !calendarRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setShowYears(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [isOpen]);

  // to previous month
  function prevMonth() {
    setCurrentMonth((prev) => {
      let newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }

  // to next month
  function nextMonth() {
    setCurrentMonth((prev) => {
      let newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }

  // Selecting a specific year
  function pickYear(year) {
    setCurrentMonth((prev) => {
      let newDate = new Date(prev);
      newDate.setFullYear(year);
      return newDate;
    });
    setShowYears(false);
  }

  // Selecting a specific date
  function selectDate(date) {
    onChange(date);
    setIsOpen(false);
  }

  // current month and year
  const monthAndYear = currentMonth.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  // days in current month
  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDay(year, month) {
    return new Date(year, month, 1).getDay();
  }

  // calendar grid
  function renderCalendar() {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysCount = getDaysInMonth(year, month);
    const firstDay = getFirstDay(year, month);

    let days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }

    // Calendar days
    for (let day = 1; day <= daysCount; day++) {
      const date = new Date(year, month, day);

      // if this date is selected
      const isSelected =
        value &&
        value.getDate() === day &&
        value.getMonth() === month &&
        value.getFullYear() === year;

      // if this date is today
      const today = new Date();
      const isToday =
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year;

      days.push(
        <button
          key={day}
          onClick={() => selectDate(date)}
          className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center text-sm",
            isSelected
              ? darkMode
                ? "bg-blue-600 text-white"
                : "bg-blue-500 text-white"
              : isToday
                ? darkMode
                  ? "border border-blue-400 text-gray-200"
                  : "border border-blue-300 text-gray-800"
                : darkMode
                  ? "text-gray-200 hover:bg-gray-700"
                  : "text-gray-800 hover:bg-gray-100",
          )}
        >
          {day}
        </button>,
      );
    }

    return days;
  }

  // year options
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = currentYear - 10; i <= currentYear + 10; i++) {
    yearOptions.push(i);
  }

  return (
    <div className={cn("relative", className)}>
      {/* Date input field */}
      <div
        ref={inputRef}
        className={cn(
          "border rounded p-2 flex items-center justify-between cursor-pointer",
          darkMode
            ? "bg-gray-800 text-gray-200 border-gray-700"
            : "bg-white text-gray-800 border-gray-300",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value ? value.toLocaleDateString() : placeholder}</span>
        <Calendar size={18} className="text-gray-400" />
      </div>

      {/* Calendar dropdown */}
      {isOpen && (
        <div
          ref={calendarRef}
          className={cn(
            "absolute mt-1 border rounded shadow-md p-3 z-10 w-64",
            darkMode
              ? "bg-gray-800 border-gray-700 text-gray-200"
              : "bg-white border-gray-200 text-gray-800",
          )}
        >
          {/* Header with month/year and navigation */}
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={prevMonth}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="relative">
              <button
                className="font-medium"
                onClick={() => setShowYears(!showYears)}
              >
                {monthAndYear}
              </button>

              {/* Year selector */}
              {showYears && (
                <div
                  className={cn(
                    "absolute top-full mt-1 border rounded shadow max-h-40 overflow-y-auto  w-32 z-20 scrollbar-hide",
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200",
                  )}
                >
                  {yearOptions.map((year) => (
                    <button
                      key={year}
                      className={cn(
                        "block w-full text-left px-2 py-1",
                        currentMonth.getFullYear() === year
                          ? "bg-blue-100 dark:bg-blue-900"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700",
                      )}
                      onClick={() => pickYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={nextMonth}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div key={day} className="text-center text-xs font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

          {/* Today button */}
          <div className="mt-2 text-center">
            <button
              className="text-sm text-blue-500 hover:underline"
              onClick={() => {
                const today = new Date();
                setCurrentMonth(today);
                selectDate(today);
              }}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { DatePicker };
