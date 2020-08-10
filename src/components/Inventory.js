import React from "react";
import style from "./Inventory.module.scss";
import { inventoryArray } from "./inventoryArray";
import { AiOutlineCloseCircle, AiOutlineArrowRight } from "react-icons/ai";
import InventoryColumn from "./InventoryColumn";
import InventoryDoubleColumn from "./InventoryDoubleColumn";

const Inventory = ({ visible, setVisibility }) => {
  return (
    <div className={style.inventory_container}>
      <div className={style.close_icon}>
        <AiOutlineCloseCircle onClick={() => setVisibility(!visible)} />
      </div>
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
              <InventoryColumn item={item} i={i} key={i} />
            ) : (
              <InventoryDoubleColumn item={item} i={i} key={i} />
            );
          })}
        </div>
        <div className={style.btn_container}>
          <button>
            Continue <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
