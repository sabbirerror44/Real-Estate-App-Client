import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Career from './Components/Career/Career';
import Contact from './Components/Contact/Contact';
import ContactEx from './Components/ContactEx/ContactEx';
import Home from './Components/Home/Home';
import NavbarHome from './Components/Home/NavbarHome/NavbarHome';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import AdminProtectedRoute from './Components/PrivateRoute/AdminProtectedRoute';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signup from './Components/Signup/Signup';
import SingleFlat from './Components/SingleFlat/SingleFlat';
import UserPanel from './Components/UserPanel/UserPanel';

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
        <PrivateRoute path = '/userpanel'>
            <UserPanel></UserPanel>
        </PrivateRoute>
        <AdminProtectedRoute path = '/admin'>
            <Admin></Admin>
        </AdminProtectedRoute>
        <Route path = '/contactauth'>
            <ContactEx></ContactEx>
        </Route>
        <PrivateRoute path = '/contact/:id'>
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
