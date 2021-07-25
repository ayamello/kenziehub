import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';

function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/cadastro">
                <Signup />
            </Route>
        </Switch>
    )
}

export default Routes;