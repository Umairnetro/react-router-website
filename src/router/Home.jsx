import img from "../assets/Group 9.png";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <main className={classes.container}>
      <div className={classes.heroContent}>
        <div className={classes.textAnimation}>
          <div className={classes.cursor}>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
          </div>
          <h1>Crafted Best Wood Collection For You</h1>
        </div>
        <button className={`${classes.btn}`}>EXCLUSIVE GALLERY</button>
      </div>
      <div className={classes.heroImage}>
        <img src={img} width={100} alt="" />
      </div>
    </main>
  );
};

export default Home;
