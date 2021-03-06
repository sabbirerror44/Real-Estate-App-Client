import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import FlatApproval from './Components/Admin/FlatApproval/FlatApproval';
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
import AddFlat from './Components/UserPanel/AddFlat/AddFlat';
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
        <PrivateRoute path = '/addflat'>
            <AddFlat></AddFlat>
        </PrivateRoute>
        <AdminProtectedRoute path = '/admin'>
            <Admin></Admin>
        </AdminProtectedRoute>
        <AdminProtectedRoute path = '/pendingflat'>
            <FlatApproval></FlatApproval>
        </AdminProtectedRoute>
        <Route path = '/contactauth'>
            <ContactEx></ContactEx>
        </Route>
        <Route path = '/contact/:id'>
            <Contact></Contact>
        </Route>
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
