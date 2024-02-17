import Style from "./Item.module.css"

function Item({ title, price, image }) {
  return (
    <>
      <img src={image} alt="" className={Style.image} />
      <p>{title}</p>
      <p>{price}</p>
    </>
  )
}

export default Item;
