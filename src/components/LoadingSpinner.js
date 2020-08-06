import React from "react";
import PropTypes from "prop-types";
import style from "./LoadingSpinner.module.scss";

const LoadingSpinner = (props) => {
  return (
    <div className={style.spinner_container}>
      <div className={style.spinner}></div>
      <img src={require(`./imgs/logo.png`)} alt="logo" />
    </div>
  );
};

LoadingSpinner.propTypes = {};

export default LoadingSpinner;
