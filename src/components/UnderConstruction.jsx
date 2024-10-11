import classes from './UnderConstruction.module.css'

const UnderConstruction = ({pageName}) => {
  return (
    <div className={classes.container}>
      <div className={classes.underConstruction}>
        <h3>{pageName}</h3>
        <h1>Under Construction</h1>
      </div>
    </div>
  )
}

export default UnderConstruction
 