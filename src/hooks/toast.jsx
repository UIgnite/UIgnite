import Toast from "../components/Toast";

import {
  useCallback,
  useContext,
  createContext,
  useState,
  useRef,
} from "react";

// creating toast context using react createContent
const ToastContext = createContext(null);

// ToastProvider to wrap all the code to use toast in entire application
const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const [hovered, setHovered] = useState(false);

  const handleShowToast = useCallback(
    (ttle, opt) => {
      const toast = {
        id: crypto.randomUUID(),
        title: ttle,
        options: {
          variant: "default",
          desc: null,
          timeout: 5000,
          ...opt,
        },
      };
      setToasts((toasts) => {
        const newToasts = toasts;
        newToasts.length > 2 ? newToasts.splice(1, 1) : null;
        return [...newToasts, toast];
      });
      setTimeout(() => {
        setToasts((toasts) => {
          const lToasts = [...toasts];
          const index = lToasts.findIndex((value) => value.id == toast.id);
          if (index <= -1) return lToasts;
          lToasts.splice(index, 1);
          if (lToasts.length <= 1) setHovered(false);
          return lToasts;
        });
      }, toast.options.timeout);
    },
    [setToasts, hovered, setHovered],
  );

  return (
    <ToastContext.Provider value={{ showToast: handleShowToast }}>
      {children}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {toasts.map((toast, idx) =>
          toast.options.timeout ? (
            <Toast
              idx={idx}
              key={idx}
              title={toast.title}
              options={toast.options}
              hovered={hovered}
            />
          ) : null,
        )}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) throw new Error("Patanai ");

  return context;
};

export { useToast, ToastProvider };
