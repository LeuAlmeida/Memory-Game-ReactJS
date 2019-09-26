import React from 'react'
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

const styles = {
    root: {
        height: "100vh",
        backgroundColor: "#ccc"
    }
}

const Dashboard = ({ children, classes }) => (
    <Grid className={classes.root} container>{children}</Grid>
)

export default withStyles(styles)(Dashboard)