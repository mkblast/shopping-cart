import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

function Product() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const json = await res.json();

      setItem(json);
      setLoading(false);
    })()
  }, [id])

  return (
    <>
      <Header />
      {loading ?
        <p>Loading</p>
        :
        <div>
          <img src={item.image} />
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price} $</p>
          <p>{item.rating.rate}</p>
          <p>{item.rating.count}</p>
        </div>
      }
    </>
  )
}

export default Product;
