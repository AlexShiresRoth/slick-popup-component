import React from "react";
import PropTypes from "prop-types";
import style from "./InventoryDoubleColumn.module.scss";

const InventoryDoubleColumn = ({ item, i }) => {
  return (
    <div className={style.two_col_container} key={i}>
      <div className={style.tab}>
        <h4>People Also Add</h4>
      </div>
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
    </div>
  );
};

InventoryDoubleColumn.propTypes = {
  item: PropTypes.object,
  i: PropTypes.number,
};

export default InventoryDoubleColumn;
