import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LoadingSpinner from "./LoadingSpinner";

const PopupForm = ({ style, setVisibility, visible, loading }) => {
  const [text, changeText] = useState("Checking Inventory Level...");

  const handleTextChange = () => {
    setTimeout(() => {
      changeText("Reserving Inventory...");
    }, 2500);
  };

  useEffect(() => {
    handleTextChange();
  }, []);

  return !loading ? (
    <form className={style.form}>
      <div className={style.form_inner}>
        <div className={style.close_icon}>
          <AiOutlineCloseCircle onClick={() => setVisibility(!visible)} />
        </div>
        <div className={style.heading}>
          <img src={require(`./imgs/logo.png`)} />
          <h2>
            <img src={require(`./imgs/fireworks.png`)} />
            CONGRATULATIONS
            <img src={require(`./imgs/fireworks.png`)} />
          </h2>
          <h3>We have reserved a Slick Lash Kit for you.</h3>
          <span></span>
          <p>First Let's Create Your Account</p>
        </div>
        <div className={style.input_col}>
          <label>Name*</label>
          <input
            type="text"
            name="name"
            placeholder="Please Enter Your Name"
            reuired={true}
          />
        </div>
        <div className={style.input_col}>
          <label>Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Please Enter Your Email"
            reuired={true}
          />
        </div>
        <div className={style.input_col}>
          <button>Continue</button>
        </div>
      </div>
    </form>
  ) : (
    <div className={style.loading_container}>
      <p>{text}</p>
      <LoadingSpinner />
    </div>
  );
};

PopupForm.propTypes = {
  style: PropTypes.object,
  visible: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func,
  loading: PropTypes.bool.isRequired,
};

export default PopupForm;
