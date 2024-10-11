import Card from "../components/Card"
import classes  from "./Products.module.css"

const Products = () => {
  return (
    <section className={classes.container}>
      <h2>This Week Featured
      Product</h2>
      <Card/>
    </section>
  )
}

export default Products