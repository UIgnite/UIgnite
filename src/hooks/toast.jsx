import Toast from "../components/Toast";

import { useCallback, useContext, createContext, useState, useRef } from "react";

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {

  const toastRef = useRef(null)

  const [title, setTitle] = useState('')
  const [options, setOptions] = useState({
    variant: "default",
    desc: "",
    timeout: 3000
  })

  const handleShowToast = useCallback((ttle, opt) => {
    setTitle(ttle)
    setOptions(options=>({...options, opt}))
    if(toastRef.current){
      toastRef.current.setAttribute('hidden', false);
      setTimeout(()=>toastRef.current.setAttribute('hidden', true), options.timeout)
    }
  }, [setTitle, setOptions, toastRef, options]);

  return (
    <ToastContext.Provider value={{ showToast: handleShowToast }}>
      {children}
      <Toast ref={toastRef} title={title} options={options}/>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) throw new Error("Patanai ");

  return context;
};

export { useToast, ToastProvider };
