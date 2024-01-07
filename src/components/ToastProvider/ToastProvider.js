import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function createToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    setToasts((toasts) => [...toasts, newToast]);
  }

  function closeToast(id) {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
