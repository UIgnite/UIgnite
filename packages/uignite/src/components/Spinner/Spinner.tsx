import {cn} from '@/utils/lib';
import { useEffect, useState, FC } from "react";

type SpinnerProps = {
  className?: string;
  variant?: "bounce" | "circular" | "bars" | "grid" | "ripple" | "terminal" | "loader";
  text?: string;
};

export const Spinner: FC<SpinnerProps> = ({
  className = "",
  variant = "bounce",
  text = "Loading...",
}) => {
  // dots
  if (variant === "bounce") {
    return (
      <div className={cn("flex space-x-2 justify-center items-center", className)}>
        <div className="h-3 w-3 dark:bg-light-primary bg-dark-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="h-3 w-3 dark:bg-light-primary bg-dark-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="h-3 w-3 dark:bg-light-primary bg-dark-primary rounded-full animate-bounce" />
      </div>
    );
  }

  // circular
  if (variant === "circular") {
    return (
      <div className={cn("flex justify-center items-center", className)}>
        <div className="loader-circle" />
      </div>
    );
  }
  

  // bars
  if (variant === "bars") {
    return (
      <div className={cn("flex space-x-1 justify-center items-center h-10", className)}>
        {[0, 0.2, 0.4, 0.6, 0.8].map((delay, idx) => (
          <div
            key={idx}
            className="w-2 h-5 bg-dark-primary dark:bg-light-primary rounded animate-grow-shrink"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    );
  }

 

  // ripple
  if (variant === "ripple") {
    return (
      <div className={cn("relative flex justify-center items-center", className)}>
        <div className="absolute h-16 w-16 rounded-full border-4 border-dark-primary dark:border-light-primary animate-ping opacity-20" />
        <div className="absolute h-12 w-12 rounded-full border-4 border-dark-primary dark:border-light-primary animate-ping opacity-40 [animation-delay:0.3s]" />
        <div className="h-8 w-8 rounded-full border-4 border-dark-primary dark:border-light-primary" />
      </div>
    );
  }

  // terminal
  if (variant === "terminal") {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
      if (textIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + text[textIndex]);
          setTextIndex((prev) => prev + 1);
        }, 150);
        return () => clearTimeout(timer);
      } else {
        const resetTimer = setTimeout(() => {
          setDisplayText("");
          setTextIndex(0);
        }, 1000);
        return () => clearTimeout(resetTimer);
      }
    }, [textIndex, text]);

    useEffect(() => {
      const blinkTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkTimer);
    }, []);

    return (
      <div className={cn(
        "flex items-center justify-start bg-gray-900 text-green-500 p-4 font-mono rounded-md w-[270px]",
        className
      )}>
        <div className="flex flex-col w-full">
          <div className="flex mb-2 items-center">
            <span className="text-sm mr-auto text-gray-400">Status</span>
            <div className="ml-2 h-3 w-3 rounded-full bg-red-500" />
            <div className="ml-2 h-3 w-3 rounded-full bg-yellow-500" />
            <div className="ml-2 h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="h-22 w-full bg-black/50 p-2 rounded-md overflow-hidden text-sm flex items-center">
            {displayText}
            {showCursor && <span className="inline-block w-[1px] h-5 bg-green-500 ml-1" />}
          </div>
        </div>
      </div>
    );
  }

  // loader
  if (variant === "loader") {
    return (
      <div className={cn("flex items-center justify-center", className)}>
        <div className="relative w-10 h-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 w-[2px] h-3 bg-dark-primary dark:bg-light-primary origin-center loader-line"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-20px)`,
                opacity: (i + 1) / 12,
                animation: "fade 1.2s linear infinite",
                animationDelay: `${(i * 0.1).toFixed(1)}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // fallback (dots)
  return (
    <div className={cn("flex space-x-2 justify-center items-center", className)}>
      <div className="h-3 w-3 dark:bg-light-primary bg-dark-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-3 w-3 dark:bg-light-primary bg-dark-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-3 w-3 dark:bg-light-primary bg-dark-primary rounded-full animate-bounce" />
    </div>
  );
};
