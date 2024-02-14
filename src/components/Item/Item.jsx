import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const param = useParams()

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${param.id}`);
      const json = await res.json();
      setItem(json);
      setLoading(false);
    })()
  }, [param.id])

  return (
    <div>
      {loading ?
        <p>Loading</p>
        :
        <>
          <img src={item.image} />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.rating.rate}</p>
          <p>{item.rating.count}</p>
        </>
      }
    </div>
  )
}

export default Item;
