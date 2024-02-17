import { Link } from "react-router-dom";
import Style from "./Header.module.css";

function Header() {
  return (
    <div className={Style.header}>
      <Link to={"/"}> <h1>ZA SHOPUU!</h1> </Link>
      <div className={Style.links}>
        <Link to={"/shop"}> <h2>Shop</h2> </Link>
        <Link to={"/cart"}> <h2>Cart</h2> </Link>
      </div>
    </div>
  )
}

export default Header;
