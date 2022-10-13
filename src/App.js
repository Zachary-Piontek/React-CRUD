
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Homepage from './components/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/auth/:type' component={Auth} />
        <Route path='homepage' component={Homepage} />
        <Route path ='*'>
          <Redirect to='/auth/sign-in'></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
