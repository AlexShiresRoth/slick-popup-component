import React, { useState } from "react";
import style from "./Popup.module.scss";
import PopupForm from "./PopupForm";

export const Popup = () => {
  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  //open the popup and create a loading time
  const openModal = () => {
    setVisibility(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <section className={style.section}>
      <button onClick={() => openModal()}>Test Popup</button>
      {visible ? (
        <PopupForm
          style={style}
          setVisibility={setVisibility}
          visible={visible}
          loading={loading}
        />
      ) : null}
    </section>
  );
};
