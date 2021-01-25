import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import MenuAppBar from './NavBar';
import LambdaSec from './LambdaSec';
import PollySec from './PollySec';
import Home from './Home';

function App() {
  const [authToken, setAuthToken] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [])

  async function checkAuth () {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log(token);
    setAuthToken(true);
  }
  
  return (
    <div className="App">
      <MenuAppBar authToken={authToken}/>
      {/* {authToken? <p>authenticated</p> : <p>Nope</p>} */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/serverless" component={LambdaSec} />
        <Route exact path="/polly" component={PollySec} />
      </Switch>
    </div>
  );
}

export default withRouter(withAuthenticator(App));
