import Card from "../components/Card"
import classes  from "./Products.module.css"

const Products = () => {
  return (
    <section className={classes.container}>
      <h2>This Week Featured
      Product</h2>
      <Card/>
      <h3>Coming Soon</h3>
    </section>
  )
}

export default Products