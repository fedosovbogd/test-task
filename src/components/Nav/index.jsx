import NavItem from "../NavItem";
import s from "./nav.module.scss";
const Nav = () => {
  const navItems = [
    { img: "1", title: "Dashboard" },
    { img: "2", title: "Product" },
    { img: "3", title: "Customers" },
    { img: "4", title: "Income" },
    { img: "5", title: "Promote" },
    { img: "6", title: "Help" },
  ];
  return (
    <>
      <div className={s.nav}>
        <div className={s.nav__header}>
          <img
            className={s.nav__logo}
            src="/Nav/Logo.svg"
            alt="Logo"
          />
          <h1 className={s.nav__title}> 
            Dashboard<span>v.01</span>
          </h1>
        </div>
        <ul className={s.nav__items}>
          {navItems.map((el, id) => (
            <NavItem id={id} key={id} {...el} />
          ))}
        </ul>
        <div className={s.nav__profile}>
          <img
            className={s.nav__profileImg}
            src="/Nav/profile.png"
            alt="profile"
          />
          <div>
            <h4 className={s.nav__profileTitle}>Evano</h4>
            <p className={s.nav__profileText}>Project Manager</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
