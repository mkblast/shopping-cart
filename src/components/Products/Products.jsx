import { useEffect, useState } from "react";
import styles from "./products.module.css"
import { Link } from "react-router-dom";

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();

      setItems(json);
    })()
  }, [])

  return (
    <div className={styles.display}>
      {items.map(e => {
        return (
          <div key={e.id} className={styles.item}>
            <img className={styles.image} src={e.image} />
            <h2>{e.title}</h2>
            <p>{e.price} $</p>
            <div>
              <Link to={`/products/${e.id}`}>Browse</Link>
              <button>Add to card</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products;
