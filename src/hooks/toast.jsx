import Toast from "../components/Toast";

import {
  useCallback,
  useContext,
  createContext,
  useState,
  useRef,
} from "react";

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const toastRef = useRef(null);

  const [title, setTitle] = useState("Toast is here");
  const [options, setOptions] = useState({
    variant: "default",
    desc: null,
    timeout: 3000,
  });

  const handleShowToast = useCallback(
    (ttle, opt) => {
      setTitle(ttle);
      setOptions((options) => ({ ...options, ...opt }));
      if (toastRef.current) {
        if (toastRef.current.classList.contains("-bottom-20")) {
          toastRef.current.classList.replace("-bottom-20", "bottom-10");
          setTimeout(() => {
            toastRef.current.classList.replace("bottom-10", "-bottom-20");
          }, options.timeout);
        }
      }
    },
    [setTitle, setOptions, toastRef, options, title]
  );

  return (
    <ToastContext.Provider value={{ showToast: handleShowToast }}>
      {children}
      <Toast ref={toastRef} title={title} options={options} />
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) throw new Error("Patanai ");

  return context;
};

export { useToast, ToastProvider };
