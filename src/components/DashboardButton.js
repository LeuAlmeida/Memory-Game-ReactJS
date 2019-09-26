import React from 'react'
import Button from "@material-ui/core/Button"

const DashboardButton = ({ children }) => (
    <Button variant="outlined" color="primary" size="large" fullWidth>
        {children}
    </Button>
)

export default DashboardButton