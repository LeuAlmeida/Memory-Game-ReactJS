import React from 'react'

import { Dashboard, DashboardMenu, DashboardButton } from "../../components"

const HomePage = () => (
    <Dashboard>
        <DashboardMenu title="Memory Game">
            <DashboardButton>Start</DashboardButton>
        </DashboardMenu>
    </Dashboard>
)

export default HomePage