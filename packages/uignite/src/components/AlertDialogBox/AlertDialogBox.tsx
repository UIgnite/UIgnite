import {useState} from 'react';
import {Button} from '@/components/Button';

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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-lg font-bold mb-2 dark:text-grey text-white">
              {title}
            </h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 text-black"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-red-600 text-white"
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
