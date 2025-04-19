import {useState} from 'react';
import {Button} from '@/components/ui/Button';

type AlertDialogBoxProps = {
  title: string;
  description: string;
};

const AlertDialogBox = ({title, description}: AlertDialogBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Show Dialog</Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dialog content */}
          <div className=" z-10 w-full max-w-md p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg mx-4">
            <h2
              id="dialog-title"
              className="text-lg font-bold mb-2 text-gray-900 dark:text-white"
            >
              {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {description}
            </p>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-zinc-200 text-black dark:bg-zinc-900 dark:hover:bg-zinc-900/80 hover:bg-zinc-300 dark:text-white"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                className="dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-50 bg-zinc-900 text-white hover:bg-zinc-800"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export {AlertDialogBox};
