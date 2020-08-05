import React, { useState } from "react";
import style from "./Popup.module.scss";

export const Popup = () => {
  const [visible, setVisibility] = useState(false);

  const popup = (
    <form className={style.form}>
      <div className={style.form_inner}>
        <div className={style.heading}>
          <h2>
            <img src={require(`./imgs/fireworks.png`)} />
            CONGRATULATIONS
            <img src={require(`./imgs/fireworks.png`)} />
          </h2>
          <h3>We have reserved a Slick Lash Kit for you.</h3>
          <p>First Let's Create Your Account</p>
        </div>
        <div className={style.input_col}>
          <label>Name*</label>
          <input type="text" name="name" placeholder="Please Enter Your Name" />
        </div>
        <div className={style.input_col}>
          <label>Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Please Enter Your Email"
          />
        </div>
        <div className={style.input_col}>
          <button>Continue</button>
        </div>
      </div>
    </form>
  );

  return (
    <section className={style.section} onClick={() => setVisibility(!visible)}>
      <button onClick={() => setVisibility(!visible)}>Test Popup</button>
      {visible ? popup : null}
    </section>
  );
};
