import React from 'react'
import MUCard from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"

const width = "160px"
const height = "200px"

const styles = {
    root: {
        width,
        height,
        margin: "12px",
        cursor: "pointer"
    },
    flipper: {
        transition: "0.6s",
        transformStyle: "preserve-3d",
        position: "relative"
    },
    flipperRotate: {
        transform: "rotateY(180deg)"
    },
    page: {
        width,
        height,
        position: "absolute",
        top: 0,
        left: 0,
        backfaceVisibility: "hidden"
    },
    pageFront: {
        backgroundColor: "silver",
        transform: "rotateY(0deg)",
        zIndex: 2
    },
    pageBack: {
        backgroundColor: "tomato",
        transform: "rotateY(180deg)"
    }
}

const Card = ({ name, classes, isActive }) => (
    <div className={classes.root}>
        <div className={classNames(classes.flipper, {
            [classes.flipperRotate]: isActive
        })}>
            <MUCard className={classNames(classes.page, classes.pageFront)} />
            <MUCard className={classNames(classes.page, classes.pageBack)}>
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </MUCard>
        </div>
    </div >
)

export default withStyles(styles)(Card)