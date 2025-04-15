import {Toast} from '../components/Toast';
import React, {
  useCallback,
  useContext,
  createContext,
  useState,
  ReactNode,
} from 'react';

interface ToastOptions {
  variant?: 'default' | 'success' | 'error' | 'info' | string;
  desc?: string;
  timeout?: number;
}

interface ToastType {
  id: string;
  title: string;
  options: ToastOptions;
}

interface ToastContextType {
  showToast: (title: string, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({children}) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const [hovered, setHovered] = useState<boolean>(false);

  const handleShowToast = useCallback(
    (title: string, opt?: ToastOptions) => {
      const toast: ToastType = {
        id: crypto.randomUUID(),
        title,
        options: {
          variant: 'default',
          desc: undefined,
          timeout: 5000,
          ...opt,
        },
      };

      setToasts((prevToasts) => {
        const newToasts = [...prevToasts];
        if (newToasts.length > 2) newToasts.splice(1, 1);
        return [...newToasts, toast];
      });

      setTimeout(() => {
        setToasts((prevToasts) => {
          const lToasts = [...prevToasts];
          const index = lToasts.findIndex((value) => value.id === toast.id);
          if (index <= -1) return lToasts;
          lToasts.splice(index, 1);
          if (lToasts.length <= 1) setHovered(false);
          return lToasts;
        });
      }, toast.options.timeout);
    },
    [setToasts, hovered, setHovered]
  );

  return (
    <ToastContext.Provider value={{showToast: handleShowToast}}>
      {children}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {toasts.map((toast, idx) =>
          toast.options.timeout ? (
            <Toast
              idx={idx}
              key={toast.id}
              title={toast.title}
              options={toast.options}
              hovered={hovered}
            />
          ) : null
        )}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};

export {useToast, ToastProvider};
