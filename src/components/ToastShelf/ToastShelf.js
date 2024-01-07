import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, closeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            close={() => closeToast(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
