import { Link } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.container}>
      <h1>404</h1>
      <p>Oops... Page Not Found!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
