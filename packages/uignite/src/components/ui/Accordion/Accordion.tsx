import React, {useState} from 'react';
import {ReactElement} from 'react';
import {cn} from '@/lib/utils';
import {ChevronDown} from 'lucide-react';

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
        'border-[0.5px] border-zinc-700/20 rounded-xl mt-[0.5px] overflow-hidden',
        className
      )}
    >
      {/* Accordion Header */}
      {/* Bg color rendering inssue in switching modes  */}
      <div
        onClick={onToggle ?? toggleAccordion}
        className="cursor-pointer dark:bg-zinc-900 dark:hover:bg-neutral-800   px-4 py-3 flex items-center justify-between  duration-300  "
      >
        <span className="text-black dark:text-white font-medium  ">
          {title}
        </span>

        <ChevronDown
          className={cn(
            'transition-transform duration-300 transform text-black dark:text-white mr-4 ',
            (isOpen ?? visible) ? 'rotate-180' : 'rotate-0'
          )}
        />
      </div>

      {/* Accordion Content */}
      <div
        className={cn(
          'transition-all duration-300  dark:bg-zinc-800 px-4 dark:text-white text-sm',
          (isOpen ?? visible)
            ? 'max-h-96 opacity-100 py-3'
            : 'max-h-0 opacity-0 py-0 overflow-hidden'
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

export {AccordionWrapper, Accordion};
