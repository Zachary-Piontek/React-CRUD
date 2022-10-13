
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/auth/:type' component={Auth} />

        <Route path = '*'>
          <Redirect to='/auth/sign-in'></Redirect>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
