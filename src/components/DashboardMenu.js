import React from 'react'
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
    root: {
        padding: theme.spacing(6)
    },
    title: {
        paddingBottom: theme.spacing(6)
    }
})

const DashboardMenu = ({ children, classes, title }) => (
    <Paper className={classes.root}>
        <Typography variant="h4" align="center" className={classes.root}>
            {title}
        </Typography>
        {children}
    </Paper>
)

export default withStyles(styles)(DashboardMenu)