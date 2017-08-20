import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'

// import App from './components/app'; // We don't need this anymore because with react-router we can specify which components to load based on which routes

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// class Hello extends React.Component {
//   render(){
//     return (
//       <div>Hello!</div>
//     );
//   }
// }
//
// class Goodbye extends React.Component {
//   render() {
//     return (
//       <div>Goodbye!</div>
//     )
//   }
// }

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/" component={PostsIndex}/>
          {/* <Route path="/hello" component={Hello} />
          <Route path="/goodbye" component={Goodbye} /> */}
        </Switch>

      </div>

    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
