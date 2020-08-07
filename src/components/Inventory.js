import React from "react";
import PropTypes from "prop-types";
import style from "./Inventory.module.scss";
import { inventoryArray } from "./inventoryArray";

const Inventory = (props) => {
  return (
    <div className={style.inventory_container}>
      <div className={style.container_inner}>
        <div className={style.heading}>
          <img src={require(`./imgs/logo.png`)} alt="logo" />
          <h2>CONGRATULATIONS!</h2>
          <h4>We have reserved a Slick Lash Kit for you</h4>
          <span></span>
          <p>
            Personalize Your Package! Add up to (3) bonus lashes to your bundle
            at an exclusive price!
          </p>
        </div>
        <div className={style.lash_grid}>
          {inventoryArray.map((item, i) => {
            return item.type === "lash set" ? (
              <div className={style.column}>
                <div className={style.heading}>
                  <h3>{item.name}</h3>
                  <h5>{item.type}</h5>
                </div>
                <div className={style.img_container}>
                  <img src={require(`./imgs/${item.img}`)} alt={item.name} />
                </div>
                <div className={style.offer}>
                  <p>{item.offer}</p>
                </div>
                <div className={style.text_container}>
                  <p>{item.text}</p>
                </div>
                <button>Add To Bag</button>
              </div>
            ) : (
              <div className={style.two_col}>
                <div className={style.col}>
                  <div className={style.img_container}>
                    <div className={style.bg_block}></div>
                    <img src={require(`./imgs/${item.img}`)} alt={item.name} />
                  </div>
                </div>
                <div className={style.col}>
                  <div className={style.heading}>
                    <h3>{item.name}</h3>
                    <h5>{item.type}</h5>
                  </div>
                  <div className={style.offer}>
                    <p>{item.offer}</p>
                  </div>
                  <div className={style.text_container}>
                    <p>{item.text}</p>
                  </div>
                  <button>Add To Bag</button>
                </div>
              </div>
            );
          })}
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

Inventory.propTypes = {};

export default Inventory;
