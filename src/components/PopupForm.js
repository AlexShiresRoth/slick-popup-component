import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LoadingSpinner from "./LoadingSpinner";
import Inventory from "./Inventory";

const PopupForm = ({ style, setVisibility, visible, loading, setLoading }) => {
  const [text, changeText] = useState("Checking Inventory Level...");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmit] = useState(false);

  const { name, email } = formData;

  //handle loading popup text change
  const handleTextChange = () => {
    setTimeout(() => {
      changeText("Reserving Inventory...");
    }, 2500);
  };

  useEffect(() => {
    handleTextChange();
  }, []);

  //remove any stored data that could conflict with user account creation
  useEffect(() => {
    const foundName = window.localStorage.getItem("name");
    const foundEmail = window.localStorage.getItem("email");

    if (foundName !== "" && foundEmail !== "") {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //handle getting user account info here
    if (name !== "" && email !== "") {
      setLoading(true);
      changeText("Saving your account info");
      //add user info to local storage
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
      //stop loading and render inventory component
      setTimeout(() => {
        setLoading(false);
        setSubmit(true);
      }, 2500);
    }
  };

  //conditionally render components once user clicks button
  //first step is to create loading sequence
  //second step: get user info
  //third step: render inventory component
  //allow user to add more to bag
  //then continue to checkout page?
  return !loading ? (
    !submitted ? (
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
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
              value={name}
              placeholder="Please Enter Your Name"
              required={true}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className={style.input_col}>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Please Enter Your Email"
              required={true}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className={style.input_col}>
            <button onSubmit={(e) => handleSubmit(e)}>Continue</button>
          </div>
        </div>
      </form>
    ) : (
      <Inventory />
    )
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
