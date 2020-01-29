import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: "white",
      border: "1px solid white"
    }
  }
}))

export default function GroupSizesColors() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant="outlined">Button A</Button>
      <Button variant="outlined">Button B</Button>
      <Button variant="outlined">Button C</Button>
    </div>
  )
}
