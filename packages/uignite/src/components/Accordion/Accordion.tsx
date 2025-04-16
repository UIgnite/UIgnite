import React, {useState} from 'react';
import {ReactElement} from 'react';
import {cn} from '@/lib/utils';

export interface AccordionParams {
  title: string;
  content: string;
  className?: string;
  defaultOpen?: boolean;
  isOpen?: boolean | null;
  onToggle?: () => void;
}

const Accordion = ({
  title,
  content,
  className = '',
  defaultOpen = false,
  isOpen = null,
  onToggle,
}: AccordionParams) => {
  const [visible, setVisible] = useState(defaultOpen);
  const toggleAccordion = () => {
    setVisible(!visible);
  };
  return (
    <div
      className={cn(
        'border border-zinc-700 rounded-xl mb-2 overflow-hidden',
        className
      )}
    >
      {/* Accordion Header */}
      <div
        onClick={onToggle ?? toggleAccordion}
        className="cursor-pointer   bg-white hover:bg-neutral-200 dark:bg-zinc-900 dark:hover:bg-zinc-800  px-4 py-3 flex items-center justify-between transition-colors duration-300 "
      >
        <span className="text-black dark:text-white font-medium  ">
          {title}
        </span>
        <svg
          className={cn(
            'transition-transform duration-300 transform dark:text-white text-black',
            (isOpen ?? visible) ? 'rotate-180' : 'rotate-0'
          )}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Accordion Content */}
      <div
        className={cn(
          'transition-all duration-300  dark:bg-zinc-800 px-4 dark:text-white text-sm',
          (isOpen ?? visible)
            ? 'max-h-96 opacity-100 py-3'
            : 'max-h-0 opacity-0 py-0 overflow-hidden',
          className
        )}
      >
        {content}
      </div>
    </div>
  );
};

interface AccordionWrapperParams {
  children: ReactElement<AccordionParams> | ReactElement<AccordionParams>[];
}

const AccordionWrapper = ({children}: AccordionWrapperParams) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              isOpen: activeIndex === index,
              onToggle: () =>
                setActiveIndex(activeIndex === index ? null : index),
            })
          : child
      )}
    </div>
  );
};

export {AccordionWrapper, Accordion as default};
