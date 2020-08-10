import React from "react";
import PropTypes from "prop-types";
import style from "./InventoryColumn.module.scss";

const InventoryColumn = ({ item, i }) => {
  return (
    <div
      className={`${style.column} ${item.bestSeller ? style.best_seller : ""}`}
      key={i}
    >
      {item.bestSeller ? (
        //add a tab for best seller frame
        <div className={style.best_seller_tab_container}>
          <h4>best seller</h4>
        </div>
      ) : null}

      {item.bestSeller
        ? item.imgs.map((img, index) => {
            //adding a frame to best seller column
            return (
              <img
                src={require(`./imgs/${img}`)}
                key={index}
                alt="wave"
                className={style.wave}
              />
            );
          })
        : null}
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
  );
};

InventoryColumn.propTypes = {
  item: PropTypes.object,
  i: PropTypes.number,
};

export default InventoryColumn;
