/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./navItem.module.scss";
const NavItem = ({ title, img, id }) => {
  const [isActive, setActive] = useState(2);
  return (
    <>
      <li>
        <p
          className={isActive != id ? s.navItem : s.navItem__active}
          onClick={() => setActive(2)}
        >
          <div className={s.navItem__title}>
            <img
              src={
                isActive != id
                  ? `/Nav/${img}.svg`
                  : `/Nav/${img}-active.svg`
              }
              alt="itemImg"
            />
            <h3>{title}</h3>
          </div>
          <img src={
                isActive != id
                  ? `/Nav/arrow.svg`
                  : `/Nav/arrow-active.svg`
              } alt="arrow" />
        </p>
      </li>
    </>
  );
};

export default NavItem;
