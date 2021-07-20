import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MuseumPage from './pages/MuseumPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import CollectionsPage from './pages/CollectionsPage';
import ItemsPage from './pages/ItemPage';
import Verification from './pages/VerificationPage'
import { UserContext, RoomContext, CollectionContext } from './components/UserContext';

function App() {

  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(null);
  const [collection, setCollection] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <RoomContext.Provider value={{room, setRoom}}>
        <CollectionContext.Provider value={{collection, setCollection}}>
          <Router>
            <Layout>
              <Switch> {/* Switch: Wraps multiple Route components. Only picks the first matching route among all the routes */}
                <Route path="/register" exact> {/* Only if the path is an exact match will it call the RegisterPage. Example: http://localhost:3000/register */}
                  <RegisterPage />
                </Route>
                <Route path="/" exact>
                  <LoginPage />
                </Route>
                <Route path="/museum" exact>
                  {!user ? <Redirect to='/'/> : <MuseumPage />}
                </Route>
                <Route path="/forgotpassword" exact>
                  <ForgotPasswordPage />
                </Route>
                <Route path='/collections' exact>
                  {!user ? <Redirect to='/'/> : <CollectionsPage/>}
                </Route>
                <Route path='/items' exact>
                  {!user ? <Redirect to='/'/> : <ItemsPage/>}
                </Route>
                <Route path='/reset/:id'>
                  <ResetPasswordPage />
                </Route>
                <Route path='/validate/:id'>
                  <Verification/>
                </Route>
                
              </Switch>
            </Layout>
          </Router>
        </CollectionContext.Provider>
      </RoomContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
