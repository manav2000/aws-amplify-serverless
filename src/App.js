import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <h1>AWS Amplify Project</h1>
    </div>
  );
}

export default withAuthenticator(App);
