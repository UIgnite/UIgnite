import React, {useEffect, useRef, useState} from 'react';

interface InputOTPProps {
  length?: number;
  onOTPSubmit?: (otp: string) => void;
}

export const InputOTP: React.FC<InputOTPProps> = ({
  length = 4,
  onOTPSubmit = () => {},
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only last digit
    setOtp(newOtp);

    const combined = newOtp.join('');
    if (combined.length === length && !newOtp.includes('')) {
      onOTPSubmit(combined);
    }

    const nextIndex = newOtp.findIndex((val, i) => i > index && val === '');
    if (nextIndex !== -1 && inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleClick = (index: number) => {
    inputRefs.current[index]?.setSelectionRange(1, 1);
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onClick={() => handleClick(index)}
          className="w-14 h-14 text-center text-xl   shadow-xs shadow-cyan-600 rounded-sm bg-cyan-600 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150"
        />
      ))}
    </div>
  );
};
