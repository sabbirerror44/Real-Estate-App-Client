import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Career from './Components/Career/Career';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NavbarHome from './Components/Home/NavbarHome/NavbarHome';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signup from './Components/Signup/Signup';
import SingleFlat from './Components/SingleFlat/SingleFlat';

export const UserContext = createContext();
export const TypeContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [type, setType] = useState('all');
  return (
  <div className='App'>
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <TypeContext.Provider value={[type, setType]}>
    <Router>
    <NavbarHome></NavbarHome>
      <Switch>
        <Route exact path='/'>
           <Home></Home>
        </Route>
        <Route path='/home'>
           <Home></Home>
        </Route>
        <Route path='/flat/:id'>
            <SingleFlat></SingleFlat>
        </Route>
        <Route path = '/signup'>
             <Signup></Signup>
        </Route>
        <Route path = '/login'>
            <Login></Login>
        </Route>
        <Route path = '/admin'>
            <Admin></Admin>
        </Route>
        <PrivateRoute path = '/contact'>
            <Contact></Contact>
        </PrivateRoute>
        <Route path = '/career'>
            <Career></Career>
        </Route>
        <Route path="*">
                <NotFound></NotFound>
          </Route>

      </Switch>
    </Router>
    </TypeContext.Provider>
    </UserContext.Provider>
    </div>
  );
}

export default App;
