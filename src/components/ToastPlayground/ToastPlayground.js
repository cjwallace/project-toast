import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]); // member of VARIANT_OPTIONS
  const [toasts, setToasts] = React.useState([]);

  function createToast() {
    return {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
  }

  function addToast(event) {
    event.preventDefault();
    setToasts((toasts) => [...toasts, createToast()]);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function closeToast(id) {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} closeToast={closeToast} />

      <div className={styles.controlsWrapper}>
        <form onSubmit={addToast}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((v) => {
                const id = `variant-${v}`;
                return (
                  <label htmlFor={id} key={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={v}
                      checked={variant === v}
                      onChange={(e) => setVariant(e.target.value)}
                    />
                    {v}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button onClick={() => console.log(message)}>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
