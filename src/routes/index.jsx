import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Profile from '../pages/profile';
import { useState } from 'react';

function Routes() {
    const [currentUser, setcurrentUser] = useState({});

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login setcurrentUser={setcurrentUser} />
            </Route>
            <Route path="/cadastro">
                <Signup />
            </Route>
            <Route path="/profile/:id">
                <Profile currentUser={currentUser} setcurrentUser={setcurrentUser} />
            </Route>
        </Switch>
    )
}

export default Routes;