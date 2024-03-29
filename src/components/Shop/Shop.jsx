import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Item from "./Item";
import Style from "./Shop.module.css"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Shop({ click }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();

      setItems(json);
      setLoading(false);
    })()
  }, [])

  return (
    <>
      <Header />
      <div className={Style.display}>
        {loading ?
          <p>Loading</p>
          :
          items.map(e => {
            return (
              <div key={e.id} className={Style.item}>
                <Item title={e.title} price={e.price} image={e.image} />
                <button onClick={() => click(e.id)}>Add To Cart</button>
                <Link to={`/product/${e.id}`}>Browser</Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

Shop.propTypes = {
  click: PropTypes.func,
};

export default Shop;
