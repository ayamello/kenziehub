import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Profile from '../pages/profile';

function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/cadastro">
                <Signup />
            </Route>
            <Route path="/profile/:id">
                <Profile />
            </Route>
        </Switch>
    )
}

export default Routes;