import Header from "../Header/Header";
import PropTypes from 'prop-types';
import Styles from "./Cart.module.css"
import { useEffect, useState } from "react";

/** @param {number[]} ids **/
async function getItems(ids) {
  const arr = ids.map(async id => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await res.json();
    return json;
  })

  return await Promise.all(arr);
}

function Cart({ ids }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getItems(ids);
      setItems(res);
      setLoading(false);
    })()
  }, [ids])

  return (
    <>
      <Header />
      <div className={Styles.display}>
        {loading ?
          <p>Loading</p>
          :
          items.length === 0 ?
            <p>No Items</p>
            :
            items.map(i => (
              <div key={i.id} className={Styles.item} >
                <img src={i.image} className={Styles.image} />
                <p>{i.title}</p>
                <p>{i.price}</p>
              </div>
            )
            )}
      </div>
    </>
  )
}

Cart.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.number),
}

export default Cart;
