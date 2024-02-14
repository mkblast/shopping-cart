import { Link } from "react-router-dom";
import styles from "./nav.module.css";

function Nav() {

  return (
    <div className={styles.navBar}>
      <h1>Za Shoppu!!!!</h1>
      <ul className={styles.items}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;
