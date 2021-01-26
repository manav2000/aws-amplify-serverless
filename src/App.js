import './App.css';
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import MenuAppBar from './NavBar';
import LambdaSec from './LambdaSec';
import PollySec from './PollySec';
import Home from './Home';

import { getTodos, postTodo, delTodo } from './redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
      todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTodos: (token) => dispatch(getTodos(token)),
  postTodo: (token, body) => dispatch(postTodo(token, body)),
  delTodo: (token, body) => dispatch(delTodo(token, body))
})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authToken: null
    }
  }

  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    this.props.getTodos(token);
    this.setState({
      authToken: token
    })
  }
 
  render() {

    const Lambda = () => {
      if(this.props.todos) {
        return (
          <LambdaSec todos={this.props.todos.todos} 
            authToken={this.state.authToken}
            postTodo={this.props.postTodo}
            delTodo={this.props.delTodo}
          />
        )
      } else {
          <LambdaSec />
      }
    }

    return (
      <div className="App">
        <MenuAppBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/serverless" component={Lambda} />
          <Route exact path="/polly" component={PollySec} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(withAuthenticator(connect(mapStateToProps, mapDispatchToProps)(App)));
