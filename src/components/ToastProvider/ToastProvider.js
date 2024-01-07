import { doc } from "prettier";
import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function handleEscape(event) {
    if (event.key === "Escape") {
      setToasts([]);
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", (e) => handleEscape(e));
  });

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
