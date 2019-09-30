import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from "./Home/HomePage"
import GamePage from "./Game/GamePage"

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/game" exact component={GamePage} />
    </Switch>
)

export default Routes