import React from "react";

export default function useEscapeKey(fn) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        fn(event);
      }
    }
    window.addEventListener("keydown", (e) => handleEscape(e));
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [fn]);
}
